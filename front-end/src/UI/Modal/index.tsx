import { StyledPopup } from "./style";

interface IModal {
  open: any;
  idElement?: number;
  title?: string;
  content: any;
  titleButton?: string;
  execute?: any;
}

const CustomPopup = (props: IModal) => {
  const { open, title, content, titleButton, execute } = props;
 
  return (
    <StyledPopup trigger={open} modal nested>
      {(close: any) => (
        <div className="modal">
          <div className="header">{title}</div>
          <div className="content">{content}</div>
          <div className="actions">
            <button
              className="close"
              onClick={() => {
                close();
              }}
            >
              Cancelar
            </button>

            <button
              className="confirm"
              onClick={() => {
                execute();
              }}
            >
              {titleButton ? titleButton : "Confirmar"}
            </button>
          </div>
        </div>
      )}
    </StyledPopup>
  );
};

export default CustomPopup;
