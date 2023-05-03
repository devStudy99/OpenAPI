import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

  ${reset}  
  
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  input:focus {
    outline: none;
  }

  .marker {
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  }

  .marker.select {
  background: blue;
  }

`;

export default GlobalStyles;
