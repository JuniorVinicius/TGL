import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--text) transparent;

     /* Works on Chrome, Edge, and Safari */
     &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--text);
      border-radius: 20px;
      border: 1px solid transparent;
    }
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
      --base-number-background: #ADC0C4;
      --text-number: #fff;
      --main-button: #27C383;
      --background-save-button: #F4F4F4;
      --background-save-button-border: #E2E2E2;
  }
`;
