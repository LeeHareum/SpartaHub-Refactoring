import ReactPaginate from "react-paginate";
import styled from "styled-components";
import "../../styles/designToken.css";

export const BoardSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px;
  align-items: center;
  width: 100%;
`;
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 50px;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  font-size: smaller;
  font-weight: normal;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: var(--white);
  color: var(--black);
  padding: 10px;
  border-top: 1.7px solid var(--black-30);
  border-bottom: 1.7px solid var(--black-30);
  text-align: center;
`;

export const TableRow = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: var(--red-99);
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid var(--black-60);
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Pagination = styled(ReactPaginate).attrs({
  activeClassName: "active"
})`
  display: flex;
  list-style-type: none;
  li {
    &.active a {
      background-color: var(--red-90);
      color: var(--pink-90);
      border-radius: 20px;
    }

    &:hover:not(.active) a {
      color: var(--pink-50);
    }

    a {
      cursor: pointer;
      padding: 3px 5px;
      color: var(--black);
      text-decoration: none;
    }
  }
`;
