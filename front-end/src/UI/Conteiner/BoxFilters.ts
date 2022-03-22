import styled from "styled-components";

export const BoxFilters = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 72px;
  padding-left: 10%;

  @media (max-width: 1200px) {
    align-items: baseline;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ConteinerButton = styled.div`
  margin-right: 16%;
`;

export const Card = styled.div`
  &.filters-mobile {
    display: none;
  }

  @media (max-width: 800px) {
    &.filters-mobile {
      display: block;
      margin-left: 10%;
    }
    &.filters {
      display: none;
    }
  }
`;
