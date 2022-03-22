import styled from "styled-components";

type Margin = {
  marginTop?: boolean
}

export const Title = styled.h2`
  text-align: center;
  font-size: 35px;
  font-style: italic;
  font-weight: bold;
  color: var(--text);
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  @media (max-width: 1024px) {
    margin-left: 0px;
  }

`;

export const Form = styled.form`
  width: 352px;
  background: var(--card-color);
  border-radius: 14px;
  border: 1px solid var(--border);
  box-shadow: 0px 3px 25px #00000014;
  margin: 25px 0px;

  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 425px) {
    width: 280px;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--lines-gray);

  @media (max-width: 1024px) {
    height: 70px;
  }

  @media (max-width: 425px) {
    height: 60px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 30px;
  border: none;
  background: transparent;

  &::placeholder {
    color: var(--placeholder);
    font-style: italic;
    font-weight: bold;
    font-size: 17px;
  }
`;

export const BoxForgetPassword = styled.div`
  width: 100%;
  height: 80px;
  padding: 30px;
  display: flex;
  justify-content: right;
  align-items: center;

  > span {
    font-size: 17px;
    font-style: italic;
    color: var(--light-gray);
    cursor: pointer;
    
    &:hover{
      filter: brightness(0.9);
    }
  }

  @media (max-width: 1024px) {
    height: 70px;
  }

  @media (max-width: 425px) {
    height: 60px;
  }
`;

export const BoxButtonSubmit = styled.div<Margin>`
  width: 100%;
  height: 80px;
  display: flex;
  margin: 20px 0px;
  margin-top: ${props => !props.marginTop && '0px'};
  justify-content: center;
  align-items: center;
`;

export const BoxButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
