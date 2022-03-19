import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    overflow-x: hidden;
  }
  body html #root {
    height: 100%;
  }

  :root{
      --background: #F7F7F7;
      --card-color: #FFFFFF;
      --border: #DDDDDD;
      --text: #707070;
      --main-green: #B5C401;
      --lines-gray: #EBEBEB;
      --placeholder: #9D9D9D;
      --light-gray: #C1C1C1;
      --icon-gray: #535351;
  }
`;
