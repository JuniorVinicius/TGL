import { BoxContentItem, Item, ListNumbers, TypeGame } from "./Cart";
import { IoTrashOutline } from "react-icons/io5";

type ItemType = {
    color: string
    game: string
    amount: string
    numbers: string
}

const ItemCart = (props: ItemType) => {

    const { color, game, amount, numbers } = props
  return (
    <>
      <Item>
        <IoTrashOutline
          size={40}
          style={{ marginRight: "14px", cursor: "pointer", color: 'var(--text-light)' }}
        />
        <BoxContentItem color={color}>
          <ListNumbers>
            {numbers}
          </ListNumbers>

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
