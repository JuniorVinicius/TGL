import styled from "styled-components";

export const MainConteiner = styled.main`
  width: 100vw;
  min-height: 100vh;

  &.new-bet {
    display: flex;
    justify-content: space-between;
  }

  & > .pagination {
    width: 100%;
    display: flex;
    list-style: none;
    height: 50px;
    justify-content: center;
    margin: 40px 0px;

    a {
      padding: 10px;
      margin: 8px;
      border-radius: 5px;
      border: 1px solid var(--border);
      color: var(--text);
      cursor: pointer;
    }

    a:hover {
      color: #fff;
      background-color: var(--main-green);
    }

    > .paginationActive a {
      color: #fff;
      background-color: var(--main-green);
    }

    > .paginationDisabled a {
      color: var(--text);
      background-color: var(--light-grey);
    }

    
    @media (max-width: 450px) {
      margin: 20px 0px;
      a {
      padding: 5px;
      margin: 4px;
      border-radius: 3px;

    }

    }
  }
`;
