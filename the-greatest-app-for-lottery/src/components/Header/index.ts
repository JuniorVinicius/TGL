import styled from "styled-components";

export const HeaderBox = styled.header`
  width: 100vw;
  height: 79px;
  border: 2px solid var(--lines-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;

  & > button {
    display: none;
    background: unset;
    border: unset;
    color: var(--text);

    @media (max-width: 650px) {
      display: flex;
      margin-right: 10%;
    }
  }

  @media (max-width: 650px) {
    &.clicked {
      padding-left: 0;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    font-size: 44px;
    font-style: italic;
    font-weight: bold;
    color: var(--text);
    margin-right: 74px;
    cursor: pointer;

    @media (max-width: 650px) {
      margin-right: 15px;

      &.clicked-logo {
        margin-left: 27%;
      }
    }
  }

  &.box-logout {
    margin-right: 16%;
    @media (max-width: 650px) {
      display: none;
      &.clicked {
        display: flex;
        position: absolute;
        width: 100vw;
        height: 120px;
        background-color: #fff;
        border-bottom: 2px solid var(--border);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: 79px;
        margin: 0;
      }
    }
  }
`;

export const ConteinerButton = styled.div`
  margin-right: 40px;

  &.button-logout {
    margin-right: 0px;
  }

  @media (max-width: 650px) {
    margin: 3% 0%;
  }
`;

export const LogoBar = styled.div`
  width: 107px;
  height: 7px;
  background: var(--main-green);
  border-radius: 6px;
  position: absolute;
  top: 74px;
  left: 9.6%;

  @media (max-width: 650px) {
    &.clicked-bar {
      left: 6%;
    }
  }

  @media (max-width: 450px) {
    &.clicked-bar {
      left: 8%;
    }
  }

  @media (max-width: 320px) {
    &.clicked-bar {
      left: 9.6%;
    }
  }
`;
