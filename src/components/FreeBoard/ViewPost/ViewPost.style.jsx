import styled from "styled-components";
import "../../../styles/Globalstyle";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f7f9fc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Nav = styled.div`
  width: 100%;
`;

export const DetailSection = styled.section`
  width: 60%;
  margin-top: 50px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin: 40px;
  text-align: center;
`;

export const UrlLink = styled.a`
  font-size: 1.2em;
  color: var(--black-50);
  text-decoration: underline;
  margin-bottom: 27px;

  &:hover {
    color: #005bb5;
  }
`;

export const Content = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin: 70px;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
`;

export const User = styled.p`
  font-size: 1em;
  margin: 70px;
  color: var(--black-80);
  margin-bottom: 10px;
`;

export const StyledDate = styled.p`
  font-size: 1em;
  color: var(--black-90);
  margin-bottom: 30px;
`;
