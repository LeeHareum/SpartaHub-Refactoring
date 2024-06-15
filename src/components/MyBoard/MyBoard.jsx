import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/spartahub_logo.png";
import supabase from "../../supabaseClient";
import {
  BoardSection,
  Pagination,
  PaginationContainer,
  Table,
  TableData,
  TableHeader,
  TableRow,
  Title,
  Tab,
  TabContainer
} from "./MyBoard.styled";
import {
  ButtonContainer,
  Container,
  ProfileBtn,
  ProfileImg,
  ProfileLogo,
  ProfileName,
  ProfileSection
} from "./MyProfile.styled";

const itemsPerPage = 10;

const MyPage = () => {
  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState("");
  const [selectedTab, setSelectedTab] = useState("job-board");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const defaultProfileImage = "/default_profile.png";

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      const tableNames = [selectedTab];
      const allData = [];

      for (const tableName of tableNames) {
        const selectColumns =
          tableName === "job-board"
            ? "id, title, content, created_at, url, user_id, users (username, track)"
            : "id, title, content, created_at, user_id, users (username, track)";
        const { data, error } = await supabase
          .from(tableName)
          .select(selectColumns)
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (error) {
          // console.log(`Error fetching data from ${tableName}: ${error.message}`);
          continue;
        } else {
          const formattedData = data.map((item) => ({
            ...item,
            created_at: new Date(item.created_at).toLocaleString("ko-KR", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit"
            }),
            tableName,
            url: item.url || ""
          }));
          allData.push(...formattedData);
        }
      }

      setBoards(allData);
    };

    fetchData();
  }, [user, selectedTab]);

  useEffect(() => {
    const fetchUserImage = async () => {
      if (!user) return;
      try {
        const { data: userData, error } = await supabase
          .from("users")
          .select("image, username")
          .eq("id", user.id)
          .single();

        if (error) {
          throw new Error(`Error fetching user image: ${error.message}`);
        }
        console.log("User Image URL:", userData.image);
        const profileImageUrl = userData.image || defaultProfileImage;
        setProfileImage(profileImageUrl);
        setUsername(userData.username);
      } catch (error) {
        // console.log(error.message);
      }
    };
    if (user) {
      fetchUserImage();
    }
  }, [user]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleProfileEdit = () => {
    navigate("/mypage/1");
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(0);
  };

  const handlePostClick = (id, tableName) => {
    navigate(`/posts/${tableName}/${id}/edit`);
  };

  const handleClickHome = () => {
    navigate(`/`);
  };

  const offset = currentPage * itemsPerPage;
  const currentPagePosts = boards.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(boards.length / itemsPerPage);

  return (
    <Container>
      <ProfileSection>
        <ProfileLogo src={logo} alt="로고" />
        <ProfileImg src={profileImage || defaultProfileImage} alt="프로필이미지" />
        <ProfileName>{username}님</ProfileName>
        <ButtonContainer>
          <ProfileBtn onClick={handleClickHome}>Home</ProfileBtn>
          <ProfileBtn onClick={handleProfileEdit}>내정보변경</ProfileBtn>
        </ButtonContainer>
      </ProfileSection>
      <BoardSection>
        <Title>내 게시물</Title>
        <TabContainer>
          <Tab onClick={() => handleTabClick("job-board")}>Job-board</Tab>
          <Tab onClick={() => handleTabClick("study-board")}>Study-board</Tab>
          <Tab onClick={() => handleTabClick("free-board")}>Free-board</Tab>
        </TabContainer>{" "}
        <Table>
          <thead>
            <TableRow>
              <TableHeader>No.</TableHeader>
              <TableHeader>제목</TableHeader>
              <TableHeader>링크</TableHeader>
              <TableHeader>닉네임</TableHeader>
              <TableHeader>작성일</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {currentPagePosts.map((board) => (
              <TableRow key={board.id} onClick={() => handlePostClick(board.id, board.tableName)}>
                <TableData>{board.id}</TableData>
                <TableData width="100px">
                  <span>{board.title}</span>
                </TableData>
                <TableData>
                  {board.url ? (
                    <a href={board.url} target="_blank" rel="noopener noreferrer">
                      {board.url}
                    </a>
                  ) : (
                    <span>-</span>
                  )}
                </TableData>
                <TableData>{board.users.username}</TableData>
                <TableData>{board.created_at}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
        {pageCount > 1 && (
          <PaginationContainer>
            <Pagination
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
            />
          </PaginationContainer>
        )}
      </BoardSection>
    </Container>
  );
};

export default MyPage;
