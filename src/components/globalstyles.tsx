import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
