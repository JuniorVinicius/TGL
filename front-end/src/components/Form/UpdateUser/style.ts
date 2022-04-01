import styled from "styled-components";

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
  width: 50%;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }


`;
export const Label = styled.label`
  font-size: 18px;
  color: var(--text);
  font-weight: bold;
  font-style: italic;
`;

export const InputConteiner = styled.div`
  background: #fff;
  width: 100%;
  height: 40px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
 
`;

export const Input = styled.input`
  background: none;
  border: none;
  padding: 10px;
  font-size: 18px;
  color: var(--text);
  font-style: italic;
`;
