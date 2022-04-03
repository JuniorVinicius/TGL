import styled from "styled-components";

type FilterType = {
  color: string;
  background?: string;
};

export const Filter = styled.button<FilterType>`
  width: 113px;
  height: 34px;
  background-color: ${(props) =>
    props.background && props.background === props.color
      ? props.background
      : "var(--card-color)"};
  border-radius: 100px;
  border: 2px solid ${(props) => props.color};
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  margin: 10px 0px;
  margin-right: 25px;

  color: ${(props) =>
    props.background && props.background === props.color
      ? "var(--card-color)"
      : props.color};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.color};
    filter: brightness(1.2);
    color: var(--card-color);
  }

  @media (max-width: 800px) {
    margin: 10px 10px 10px 0px;
    width: 100px;
    height: 30px;
  }
`;
