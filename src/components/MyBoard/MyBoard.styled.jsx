import ReactPaginate from "react-paginate";
import styled from "styled-components";
import "../../styles/designToken.css";

export const BoardSection = styled.section`
  position: fixed;
  top: 0;
  left: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 330px);
  padding: 20px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 50px;
  margin-bottom: 40px;
  text-align: left;
  margin-left: 0;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  transform: translateY(5%);
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

  a,
  span,
  div {
    pointer-events: none;
    text-decoration: none;
    color: var(--black-30);
    display: inline-block;
    width: ${(props) => props.linkWidth || "300px"};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 1.5px;
    vertical-align: bottom;
  }
`;

export const TableLinkData = styled(TableData)`
  pointer-events: none;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

export const Pagination = styled(ReactPaginate).attrs({
  activeClassName: "active"
})`
  display: flex;
  list-style-type: none;
  li {
    &.active a {
      color: var(--pink-50);
      font-weight: bold;
    }

    &:hover:not(.active) a {
      color: var(--red-80);
    }

    a {
      cursor: pointer;
      padding: 3px 5px;
      color: var(--black-95);
      text-decoration: none;
    }
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;

  span {
    cursor: pointer;
    padding: 10px;
    margin: 0 10px;
    border-radius: 50px;
    background-color: var(--red-95);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--red-99);
    }
  }
`;

export const Tab = ({ label, onClick }) => {
  return <span onClick={onClick}>{label}</span>;
};
