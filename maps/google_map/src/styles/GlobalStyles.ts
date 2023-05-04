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

  .infoPlaceName {
    font-size: 14px;
    font-weight: bolder;
  }

  .infoAddressName {
    font-size: 12px;
    font-weight: normal;
  }

  .infoSubmit {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    color: #ffffff;
    background: #0f2cc5;
    margin-top: 6px;
    padding: 6px 0px;
  }
`;

export default GlobalStyles;
