import styled from "styled-components";

interface IProps {
  height?: string;
}

export const BoxForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;
export const TitleForm = styled.h1`
  color: var(--text);
  font-style: italic;
  @media (max-width: 540px) {
    font-size: 20px;
  }
`;
export const Form = styled.form`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 525px) {
    width: 300px;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
export const Label = styled.label`
  font-size: 18px;
  color: var(--text);
  font-weight: bold;
  font-style: italic;
`;

export const InputConteiner = styled.div<IProps>`
  background: #fff;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "40px")};
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  padding: 10px;
  font-size: 18px;
  color: var(--text);
  font-style: italic;
`;

export const IputDescription = styled.textarea`
  padding: 10px;
  font-size: 18px;
  color: var(--text);
  font-style: italic;
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  background: none;
`;

export const BoxButtons = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  @media (max-width: 540px) {
    flex-direction: column;
    height: 200px;
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
    padding: 17px 22px;
    max-height: 52px;
    border: 1px solid var(--main-button);
    border-radius: 10px;
    background: unset;
    color: var(--main-button);
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        filter: brightness(1.2);
    }

    @media (max-width: 530px) {
        margin-right: 0px;
        margin-bottom: 10px;
        width: 200px;
  }

`;
