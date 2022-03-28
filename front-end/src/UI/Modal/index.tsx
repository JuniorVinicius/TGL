import { useDispatch } from 'react-redux';
import { cartActions } from './../../store/cart-slice';
import { StyledPopup } from './style';

interface IModal{
    open: any;
    idElement?: number;
    title?: string;
    content: any;
    titleButton?: string;
}

const CustomPopup = (props: IModal) => {
    const {open, idElement, title, content, titleButton} = props;
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(cartActions.removeItemFromCart(idElement));
      }

    return (

        <StyledPopup
          trigger={open}
          modal
          nested
        >
          {(close: any) => (
            <div className="modal">
              <div className="header">{title}</div>
              <div className="content">{content}</div>
              <div className="actions">
                <button
                  className="close"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  Cancelar
                </button>
      
                <button
                  className="confirm"
                  onClick={() => {
                    console.log("modal Confirmado");
                    removeItem()
                  }}
                >
                  {titleButton ? titleButton : "Confirmar"}
                </button>
              </div>
            </div>
          )}
        </StyledPopup>
      );
}

export default CustomPopup;
