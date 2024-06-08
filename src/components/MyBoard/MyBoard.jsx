import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Title
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
  const dispatch = useDispatch();
  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const defaultProfileImage = "/default_profile.png";

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("board")
        .select("id, title, content, created_at, url, user_id, users:users!board_user_id_fkey(username, track)")
        .eq("user_id", user.id)
        .order("id", { ascending: true });
      if (error) {
        console.log("error => ", error);
      } else {
        const formattedData = data.map((item) => ({
          ...item,
          created_at: new Date(item.created_at).toLocaleString()
        }));
        setBoards(formattedData);
      }
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const { data: userData, error } = await supabase.from("users").select("image").eq("id", user.id).single();
        if (error) {
          throw error;
        }
        const profileImageUrl = userData.image || defaultProfileImage;
        setProfileImage(profileImageUrl);
      } catch (error) {
        error.message;
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

  const handlePostClick = (id) => {
    navigate(`/posts/${id}/edit`);
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
        <ProfileName>{user.user_metadata.username}님</ProfileName>
        <ButtonContainer>
          <ProfileBtn onClick={handleClickHome}>Home</ProfileBtn>
          <ProfileBtn onClick={handleProfileEdit}>내정보변경</ProfileBtn>
        </ButtonContainer>
      </ProfileSection>
      <BoardSection>
        <Title>내 게시물</Title>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>게시물 번호</TableHeader>
              <TableHeader>제목</TableHeader>
              <TableHeader>링크</TableHeader>
              <TableHeader>작성일</TableHeader>
              <TableHeader>닉네임</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {currentPagePosts.map((board) => (
              <TableRow key={board.id} onClick={() => handlePostClick(board.id)}>
                <TableData>{board.id}</TableData>
                <TableData>{board.title}</TableData>
                <TableData>{board.url}</TableData>
                <TableData>{board.created_at}</TableData>
                <TableData>{board.users.username}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
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
      </BoardSection>
    </Container>
  );
};

export default MyPage;
