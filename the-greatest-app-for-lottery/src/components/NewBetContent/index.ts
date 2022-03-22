import styled from "styled-components";

export const BoxBetNumbers = styled.section`
  margin-left: 10%;
  width: 684px;
  @media (max-width: 1000px) {
    margin-right: 10%;
  }

  @media (max-width: 470px) {
    max-width: 484px;
    margin-right: 5%;
  }

  @media (max-width: 325px) {
    margin-left: 5%;
    margin-right: 10%;
  }
`;

export const BoxCart = styled.section`
  margin-right: 14%;

  @media (max-width: 1300px) {
    margin-left: 5%;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TitleBet = styled.p`
  font-size: 24px;
  font-style: italic;
  color: var(--text);
  margin-top: 73px;
`;

export const Emphasis = styled.span`
  font-weight: bold;
`;
export const Label = styled.p`
  font-size: 17px;
  font-style: italic;
  font-weight: bold;
  color: var(--text-light);
  margin-top: 33px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 17px;
  font-style: italic;
  color: var(--text-light);
  margin: 28px 0px;

  @media (max-width: 470px) {
    font-size: 14px;
  }
`;
