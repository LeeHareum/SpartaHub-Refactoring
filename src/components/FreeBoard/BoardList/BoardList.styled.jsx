import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const BoardSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

export const Ptag = styled.p`
  font-size: 13px;
  margin: 0;
  padding-top: 10px;
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
  &:nth-child(3) {
    padding-left: 70px;
  }
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
  position: relative;
  a {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: var(--black-30);
    text-decoration: none;
    width: 230px;
    overflow: hidden;
    pointer-events: none;
    white-space: nowrap;
    display: block;
    margin-left: 30px;
  }
`;

export const StyledTableData = styled(TableData)`
  width: ${(props) => props.width || "auto"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${(props) => props.maxWidth || "130px"};
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
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    margin: 0 5px;

    &.active a {
      background-color: var(--red-90);
      color: var(--pink-90);
      border-radius: 3px;
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

export const DivBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-end;
  cursor: pointer;
`;
export const Button = styled.button`
  background-color: var(--pink-50);
  color: var(--purple-90);
  margin-bottom: 5px;
  width: 8%;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--red-30);
    color: var(--red-99);
  }
`;

export const Pdiv = styled.div`
  display: flex;
  p {
    text-align: center;
    line-height: 20px;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 40px;
  h1 {
    font-size: 5em;
    text-align: center;
    line-height: 200px;
  }
`;
