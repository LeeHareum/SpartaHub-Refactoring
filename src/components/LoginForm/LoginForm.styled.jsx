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
  font-size: 17px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
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

export const GoogleIcon = styled.img`
  margin-left: 5px;
  height: 35px;
`;

export const GoogleIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;
