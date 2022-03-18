
import styled from 'styled-components';

type ButtonStyle = {
    color?: string
}

export const Button = styled.button<ButtonStyle>`
    background: unset;
    border: unset;
    font-size: 35px;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    color: ${props => props.color || 'var(--text)'}

`