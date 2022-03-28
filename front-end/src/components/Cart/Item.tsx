import { BoxContentItem, Item, ListNumbers, TypeGame } from "./Cart";
import { IoTrashOutline } from "react-icons/io5";
import CustomPopup from "../../UI/Modal";

type ItemType = {
  color: string;
  game: string;
  amount: string;
  numbers: string;
  id: number;
};

const ItemCart = (props: ItemType) => {
  const { color, game, amount, numbers, id } = props;

  return (
    <>
      <Item>
        <CustomPopup
          title="Excluir Aposta"
          content={"Deseja realmente excluir esta aposta?"}
          idElement={id}
          open={
            <button style={{background: 'unset', border:'none'}}>
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
