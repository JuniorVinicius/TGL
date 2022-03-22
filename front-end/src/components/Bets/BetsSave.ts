import styled from "styled-components";

type BetType = {
  color?: string;
};

export const BoxBet = styled.section`
  margin-left: 10%;
  display: flex;
  margin-top: 30px;
  @media (max-width: 600px) {
    margin-right: 10%;
  }
`;

export const Content = styled.section`
  padding: 5px 15px;
`;

export const Barr = styled.div<BetType>`
  background: ${(props) => props.color};
  height: 103px;
  width: 6px;
  border-radius: 3px;

  @media (max-width: 600px) {
    height: 94px;
  }
`;

export const ConteinerText = styled.p`
  margin: 15px 0px;
  color: var(--text);
  &.first-conteiner {
    margin-top: 0px;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    margin: 10px 0px;
    &.first-conteiner {
      margin-top: 0px;
      font-size: 16px;
    }
  }
`;

export const Register = styled.span`
  font-size: 17px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const TagGame = styled.span<BetType>`
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  color: ${(props) => props.color};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
