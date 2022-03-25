import styled from "styled-components";

type Text = {
  fontSize?: number;
  fontBold?: boolean;
  marginRight?: number;
};

export const TextContent = styled.span<Text>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "24px")};
  font-style: italic;
  color: var(--text);
  font-weight: ${(props) => props.fontBold && "bold"};
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + "px" : "45px"};

  @media (max-width: 1200px) {
    margin-right: 15px;
    margin-bottom: 15px;
  }
`;
