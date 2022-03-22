import styled from "styled-components";

type FilterType = {
  color: string;
};

export const Filter = styled.button<FilterType>`
  width: 113px;
  height: 34px;
  background: var(--card-color);
  border-radius: 100px;
  border: 2px solid ${(props) => props.color};
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  margin-right: 25px;
  color: ${(props) => props.color};
  cursor: pointer;
  transition: 0.4ms;

  &:hover {
    background: ${(props) => props.color};
    filter: opacity(0.5);
    color: var(--card-color);
  }

  @media (max-width: 800px) {
    margin: 10px 10px 10px 0px;
    width: 100px;
    height: 30px;
  }
`;
