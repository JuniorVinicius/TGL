import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { IoTrashOutline } from "react-icons/io5";

import CustomPopup from "../../UI";
import { BoxContentItem, Item, ListNumbers, TypeGame } from "./style";

interface ItemType {
  color: string;
  game: string;
  amount: string;
  numbers: string;
  id: number;
};

const ItemCart = (props: ItemType) => {
  const { color, game, amount, numbers, id } = props;
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <>
      <Item>
        <CustomPopup
          title="Excluir Aposta"
          content={"Deseja realmente excluir esta aposta?"}
          execute={removeItem}
          open={
            <button style={{ background: "unset", border: "none" }}>
              <IoTrashOutline
                size={35}
                style={{
                  marginRight: "14px",
                  cursor: "pointer",
                  color: "var(--text-light)",
                }}
              />
            </button>
          }
        />
        <BoxContentItem color={color}>
          <ListNumbers>{numbers}</ListNumbers>

          <TypeGame color={color}>
            <span>{game}</span>
            <span>{amount}</span>
          </TypeGame>
        </BoxContentItem>
      </Item>
    </>
  );
};

export default ItemCart;
