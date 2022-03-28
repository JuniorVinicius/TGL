import { BoxContentItem, Item, ListNumbers, TypeGame } from "./Cart";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { cartActions } from "../../store/cart-slice";

type ItemType = {
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
  }
  return (
    <>
      <Item>
        <IoTrashOutline
          size={35}
          style={{
            marginRight: "14px",
            cursor: "pointer",
            color: "var(--text-light)",
          }}
          onClick={removeItem}
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
