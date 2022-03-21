import { BoxContentItem, Item, ListNumbers, TypeGame } from "./Cart";
import { IoTrashOutline } from "react-icons/io5";

type ItemType = {
    color: string
    game: string
    amount: string
}

const ItemCart = (props: ItemType) => {

    const { color, game, amount } = props
  return (
    <>
      <Item>
        <IoTrashOutline
          size={50}
          style={{ marginRight: "14px", cursor: "pointer", color: 'var(--text)' }}
        />
        <BoxContentItem color={color}>
          <ListNumbers>
            01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15
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
