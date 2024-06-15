import styled from "styled-components";
import "../../styles/designToken.css";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  background-color: var(--red-90);
  height: 100%;
  width: 330px;
  z-index: 1;
`;

export const ProfileLogo = styled.img`
  background-image: url("/spartahub_logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 80px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const ProfileImg = styled.img`
  background-image: url("/default_profile.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--red-99);
  box-shadow: 0 5px 10px rgba(243, 146, 146, 0.703);
`;

export const ProfileName = styled.p`
  margin: 80px 0 15px 0;
  font-size: 25px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

export const ProfileBtn = styled.button`
  margin-top: 3px;
  padding: 10px 15px;
  background-color: var(--pink-50);
  color: var(--pink-90);
  cursor: pointer;
  font-size: smaller;
  border: 3px solid white;
  border-radius: 15px;
  transition: background-color 0.3s ease;
  display: inline-block;
  flex: 1;

  &:first-child {
    margin-right: 5px;
  }
  &:hover {
    background-color: var(--red-30);
    color: var(--red-99);
  }

  &:active {
    box-shadow: none;
    transform: translateY(2px);
  }
`;
