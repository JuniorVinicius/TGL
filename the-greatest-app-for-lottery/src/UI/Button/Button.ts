
import styled from 'styled-components';

type ButtonStyle = {
    color?: string
    size?: number
    fontSize?: number
}

export const Button = styled.button<ButtonStyle>`
    background: unset;
    display: flex;
    align-items: center;
    white-space: nowrap;
    min-width: ${props => props.size + '%' || '0%'};
    border: unset;
    font-size: ${props => props.fontSize ?  props.fontSize + 'px': '35px'};;
    font-weight: bold;
    font-style: italic;
    cursor: pointer;
    color: ${props => props.color || 'var(--text)'};

    &:hover{
        filter: brightness(1.2);
    }
`