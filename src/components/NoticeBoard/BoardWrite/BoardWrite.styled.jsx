import styled from "styled-components";

export const BoardSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 90%;
`;
export const TitleDiv = styled.div`
  width: 100%;
  height: 100px;
  h1 {
    font-size: large;
    text-align: start;
    line-height: 150px;
  }
`;
export const Title = styled.h1`
  font-size: 45px;
  text-align: center;
`;

export const Section = styled.section`
  border-top: 2px solid var(--black-90);
  padding: 10px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 30px;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 27px;
  padding-left: 5px;
  outline: none;
  border: 1px solid var(--black-80);
  border-radius: 5px;
  &:hover {
    border: 1px solid var(--red-30);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-left: 570px;
`;

export const CreateBtn = styled.button`
  margin: auto;
  padding: 13px 23px;
  background-color: var(--pink-50);
  color: var(--pink-90);
  cursor: pointer;
  font-size: smaller;
  border: none;
  border-radius: 7px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--red-30);
    color: var(--red-99);
  }

  &:active {
    box-shadow: none;
    transform: translateY(2px);
  }
`;

export const TextAreaContent = styled.textarea`
  width: 98%;
  height: 150px;
  padding: 10px;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: large;
  outline: none;
  &:focus {
    border-color: var(--red-30);
  }
`;

export const EditLabel = styled.label`
  margin-top: 20px;
  display: flex;
  font-size: medium;
`;
