import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  max-height: 1000px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 100px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: black;
  display: block;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #e8344e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #fd5972;
  }
  width: 322px;
`;
