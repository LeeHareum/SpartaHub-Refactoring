import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 600px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const HubImg = styled.img`
  object-fit: cover;
  width: 250px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: black;
  display: block;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 15px;
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
  margin-top: 20px;
  width: 322px;
`;

export const Span = styled.span`
  color: #0f3dde;
  font-weight: normal;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const Select = styled.select`
  display: block;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 323px;
  background-color: white;
  font-size: 14px;
  color: #333;
`;

export const FlexDiv = styled.div`
  display: flex;
`;
