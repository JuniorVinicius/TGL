import styled from "styled-components";

type FontSize = {
  fontSize: number;
};

export const BoxText = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: 80px;
    margin-right: 0px;
  }
`;

export const Text = styled.span<FontSize>`
  font-size: ${(props) => props.fontSize + "px"};
  text-align: center;
  font-style: italic;
  color: var(--text);
  font-weight: bold;
  letter-spacing: 0;

  @media (max-width: 1024px) {
    font-size: ${(props) => props.fontSize - 15 + "px"};
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.fontSize - 50 > 15 ? 20 + "px" : props.fontSize - 50 + "px"};
  }
`;

export const Span = styled.span`
  font-size: 22px;
  background: var(--main-green);
  color: #fff;
  font-style: italic;
  font-weight: bold;
  border-radius: 100px;
  padding: 7px 60px;
  text-align: center;
  margin: 30px 0px;
  letter-spacing: 0;

  @media (max-width: 1024px) {
    padding: 7px 50px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 2px 18px;
    margin: 10px 0px;
  }
`;
