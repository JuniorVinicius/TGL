import styled from "styled-components";

interface IHeader{
  hasCartButton?: boolean;
}

export const HeaderBox = styled.header<IHeader>`
  width: 100vw;
  height: 79px;
  border-bottom: 2px solid var(--lines-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;

  & > .box-buttons {
    display: none;
    margin-right: 10%;
    justify-content: space-between;
    align-items: center;

    & > div {
      width: 40px;
      padding: 2px 25px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border: 2px solid var(--border);
      border-radius: 20px;
      color: var(--text);
      cursor:  pointer;
      margin-left: 10px;
      & > button {
        background: unset;
        border: unset;
        color: var(--text);
      }
    }

    @media (max-width: 1000px) {
      display: ${props => props.hasCartButton ? 'flex' : 'none'}flex;
      
    }
    @media (max-width: 768px) {
      display: flex;
      
    }
  }
  & > div > button:first-child {
    display: none;
    background: unset;
    border: unset;
    color: var(--text);
    @media (max-width: 768px) {
      display: flex;
    }
  }

  @media (max-width: 768px) {
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

    @media (max-width: 768px) {
      margin-right: 15px;

      &.clicked-logo {
        margin-left: 27%;
      }
    }
  }

  &.box-logout {
    margin-right: 16%;

    @media (max-width: 768px) {
      display: none;
      &.clicked {
        display: flex;
        position: absolute;
        width: 100vw;
        height: 120px;
        background-color: #fff;
        border-bottom: 2px solid var(--border);
        justify-content: space-center;
        align-items: center;
        flex-direction: column;
        top: 79px;
      }
    }
  }
`;

export const ConteinerButton = styled.div`
  margin-right: 40px;

  &.button-logout {
    margin-right: 0px;
  }

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
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
