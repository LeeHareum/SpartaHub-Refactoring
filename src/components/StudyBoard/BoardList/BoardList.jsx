import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../../styles/Globalstyle";
import supabase from "../../../supabaseClient";
import {
  BoardSection,
  Button,
  Container,
  DivBar,
  Pagination,
  PaginationContainer,
  Pdiv,
  Ptag,
  Table,
  TableData,
  TableHeader,
  TableRow,
  TitleDiv
} from "./BoardList.styled";

const BoardList = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("study-board")
        .select("id, title, content,created_at,  user_id, users:users!study-board_user_id_fkey(username, track)")
        .order("created_at", { ascending: false });
      if (error) {
        error.message;
      } else {
        const formattedData = data.map((item) => ({
          ...item,
          created_at: new Date(item.created_at).toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
          })
        }));
        setBoards(formattedData);
      }
    };
    fetchData();
  }, []);

  const handleChange = () => {
    navigate(`/study/write`);
  };
  const offset = currentPage * itemsPerPage;
  const currentPagePosts = boards.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(boards.length / itemsPerPage);

  const handleRowClick = async (id) => {
    const { data, error } = await supabase
      .from("study-board")
      .select("id, title, content, created_at, user_id")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
    } else {
      navigate(`/study/${id}`, { state: { post: data } });
    }
  };

  return (
    <Container>
      <BoardSection>
        <TitleDiv>
          <h2 style={{ fontWeight: "bold", fontSize: "1.6rem" }}>스터디/프로젝트 공유</h2>
        </TitleDiv>
        <DivBar>
          <Pdiv>
            <Ptag></Ptag>
          </Pdiv>
          <Pdiv>
            <Ptag></Ptag>
          </Pdiv>
          {isAuthenticated ? <Button onClick={handleChange}>New +</Button> : null}
        </DivBar>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>No.</TableHeader>
              <TableHeader>제목</TableHeader>
              <TableHeader>닉네임</TableHeader>
              <TableHeader>일자</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {currentPagePosts.map((board) => (
              <TableRow key={board.id} onClick={() => handleRowClick(board.id)}>
                <TableData>{board.id}</TableData>
                <TableData width="400px">
                  <span>{board.title}</span>
                </TableData>
                <TableData>{board.users.username}</TableData>
                <TableData width="250px">{board.created_at}</TableData>
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

export default BoardList;
