import ReactPaginate from "react-paginate";
import styled from "styled-components";
import "../../styles/designToken.css";

export const BoardSection = styled.section`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 50px;
`;

export const Table = styled.table`
  width: 100%;
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
  &:nth-child(even) {
    cursor: pointer;
    background-color: var(--red-99);
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid var(--black-60);
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:last-child) {
    width: ${(props) => props.width || "auto"}; // 각각의 너비 조절
  }
`;

export const TableLinkData = styled(TableData)`
  pointer-events: none;
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
