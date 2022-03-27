import styled from "styled-components";

type ItemType = {
  color: string;
};

export const BoxBetSave = styled.div`
  width: 317px;
  max-height: 484px;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  margin-top: 41px;
 
`;

export const TitleCart = styled.p`
  margin-left: 17px;
  margin-top: 32px;
  color: var(--text);
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
`;

export const Itens = styled.ul`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

export const Item = styled.li`
  display: flex;
  list-style: none;
  margin-left: 17px;
  align-items: center;
  margin-top: 32px;
`;

export const BoxContentItem = styled.div<ItemType>`
  padding: 8px 10px;
  border-left: 4px solid ${(props) => props.color};
  border-radius: 4px 0px 0px 4px;
  width: 100%;
`;

export const ListNumbers = styled.p`
  color: var(--text-light);
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 6px;

`;
export const TypeGame = styled.p<ItemType>`
  color: var(--text-light);
  font-size: 16px;

  & > span:first-child {
    color: ${(props) => props.color};
    margin-right: 14px;
    font-weight: bold;
    font-style: italic;
  }
`;
export const Total = styled.p`
  color: var(--text);
  font-size: 24px;
  margin-left: 17px;
  margin-top: 40px;
  margin-bottom: 47px;
  & > span:first-child {
    font-weight: bold;
    font-style: italic;
  }
`;

export const BoxSave = styled.div`
  width: 100%;
  height: 108px;
  background: var(--background-save-button);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--background-save-button-border);
  border-bottom: 1px solid var(--background-save-button-border);
  border-radius: 0px 0px 10px 10px;
`;

export const EmptyCart = styled.p`
  color: var(--text-light);
  text-align: center;
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  margin-top: 10px;
`
