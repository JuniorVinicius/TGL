import styled from "styled-components";

type ButtonType = {
    background?: boolean
}

export const Button = styled.button<ButtonType>`
    padding: 17px 22px;
    max-height: 52px;
    border: 1px solid var(--main-button);
    border-radius: 10px;
    background: ${props => props.background ? 'var(--main-button)' : 'unset'};
    color: ${props => props.background ? 'var(--text-number)' : 'var(--main-button)'};
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

`