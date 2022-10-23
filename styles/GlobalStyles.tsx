import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // font-family: Sans-Serif;
    color: rgb(0,0,0, 0.6)
  }
* {
    box-sizing: border-box;
}
html {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    scroll-behavior: smooth;s
}
`;

export default GlobalStyle;
