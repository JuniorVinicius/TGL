import Popup from "reactjs-popup";

import styled from "styled-components";

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  // use your custom style for ".popup-content"
  &-content {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    width: 400px;
    text-align: center;
    border: 2px solid var(--border);
    color: var(--text);
    font-size: 18px;
    .header {
      font-size: 20px;
      text-align: center;
      font-weight: bold;
      font-style: italic;
      color: var(--text);
      margin-bottom: 30px;
    }

    .actions {
      margin: 30px 0px;
      display: flex;
      justify-content: space-evenly;

      button {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid var(--border);
        background-color: #fbfbfb;
        color: var(--text);
        cursor: pointer;
      }

      .close:hover {
        background-color: #fb8d8d;
        color: #fff;
      }

      .confirm:hover {
        background-color: #8dfb93;
        color: #fff;
      }
    }

    @media (max-width: 430px) {
      width: 300px;
      font-size: 16px;
      .header {
        margin-bottom: 20px;
      }
      .actions {
        margin: 20px 0px;
        button {
          width: 90px;
          height: 30px;
        }
      }
    }
  }
`;