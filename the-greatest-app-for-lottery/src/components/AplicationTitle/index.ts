import styled from "styled-components";

type FontSize = {
  fontSize?: string;
};

export const BoxText = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`;

export const Text = styled.span<FontSize>`
  font-size: ${(props) => props.fontSize || "65px"};
  text-align: center;
  font-style: italic;
  color: var(--text);
  font-weight: bold;
  letter-spacing: 0;
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
`;
