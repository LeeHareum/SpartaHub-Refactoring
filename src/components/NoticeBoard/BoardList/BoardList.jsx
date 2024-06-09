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
        .from("job-board")
        .select("id, title, content,created_at, url, user_id, users:users!job-board_user_id_fkey(username, track)")
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
    navigate(`/job/1`);
  };
  const offset = currentPage * itemsPerPage;
  const currentPagePosts = boards.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(boards.length / itemsPerPage);

  const handleRowClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <Container>
      <BoardSection>
        <TitleDiv>
          <h2 style={{ fontWeight: "bold", fontSize: "1.6rem" }}>채용공고 공유</h2>
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
              <TableHeader>게시물 번호</TableHeader>
              <TableHeader>제목</TableHeader>
              <TableHeader>URL</TableHeader>
              <TableHeader>일자</TableHeader>
              <TableHeader>닉네임</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {currentPagePosts.map((board) => (
              <TableRow key={board.id} onClick={() => handleRowClick(board.id)}>
                <TableData>{board.id}</TableData>
                <TableData>{board.title}</TableData>
                <TableData>
                  <a href={board.url} target="_blank">
                    {board.url}
                  </a>
                </TableData>
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

export default BoardList;
