import styled from "styled-components";

export const BoxNumbers = styled.ul`
  display: grid;
  grid-template-areas: "li li li li li li li li li";
  align-items: center;
  grid-gap: 20px 12px;
  margin-bottom: 44px;
`;

export const Number = styled.li`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--base-number-background);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: var(--text-number);
  cursor: pointer;

  &:hover{
    filter: brightness(1.1);
  }
  
`;
