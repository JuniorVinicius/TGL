import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0px;
    padding-right: 15px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  &.main-box {
    margin-bottom: 100px;
  }

  @media (max-width: 530px){
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;
  }
`;
