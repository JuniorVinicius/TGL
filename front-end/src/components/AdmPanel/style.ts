import styled from "styled-components";

export const BoxAdmPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0px;
  @media (max-width: 500px) {
    display: grid;
    grid-template-areas: 'button button';
  }
`;

export const BoxDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Conteiner = styled.div`
  width: 600px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  color: var(--text-light);
  font-style: italic;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: var(--text-light);
  font-style: italic;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
