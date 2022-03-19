import styled from "styled-components";

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
`;

export const Form = styled.form`
  width: 352px;
  height: 337px;
  background: var(--card-color);
  border-radius: 14px;
  border: 1px solid var(--border);
  box-shadow: 0px 3px 25px #00000014;
  margin: 25px 0px;
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--lines-gray);
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
  }
`;

export const BoxButtonSubmit = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
