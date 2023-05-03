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

  .infoBox {
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background: #ffffff;
  margin: 0;
  box-sizing: border-box;
  border-radius: 10px;
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
