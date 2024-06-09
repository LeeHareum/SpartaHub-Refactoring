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
  margin-top: 100px;
  font-size: 2em;
  margin-bottom: 50px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
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
  vertical-align: middle;
  &:hover {
    background-color: var(--red-99);
    cursor: pointer;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid var(--black-60);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.width || "auto"};
  vertical-align: middle;

  a,
  span,
  div {
    text-decoration: none;
    color: var(--black-30);
    display: inline-block;
    width: ${(props) => props.linkWidth || "300px"};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
