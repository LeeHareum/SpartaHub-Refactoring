import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  #App {
  height: 100vh;
  width: 100vh;
}
`;
export default GlobalStyle;
