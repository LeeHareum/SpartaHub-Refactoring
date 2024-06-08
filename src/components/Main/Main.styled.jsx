import styled from "styled-components";

export const Full = styled.div`
  height: 100vh;
`;

export const TopBanner = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const TextContainer = styled.div`
  margin: 0 250px;
  font-size: 1.3rem;
  line-height: 150%;
`;

export const BottomBanner = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const H1Container = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  margin: 15px 0px;
`;
