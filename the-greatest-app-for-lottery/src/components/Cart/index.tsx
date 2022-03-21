import { Button } from "../../UI/Button/Button";
import { BoxBetSave, Itens, TitleCart, Total, BoxSave } from "./Cart";
import ItemCart from "./Item";
import { BsArrowRight } from 'react-icons/bs';

const Cart = () => {
  return (
    <>
      <BoxBetSave>
        <TitleCart>CART</TitleCart>
        <Itens>
          <ItemCart color="#7F3992" game="Lotofácil" amount="R$ 2,50" />
          <ItemCart color="#01AC66" game="Mega-Sena" amount="R$ 4,00" />
          <ItemCart color="#F79C31" game="Lotomania" amount="R$ 3,50" />
        </Itens>

        <Total>
          <span>CART</span> TOTAL: <span>R$ 10,00</span>
        </Total>

        <BoxSave>
          <Button fontSize={35} color="var(--main-button)">
            Save<BsArrowRight style={{ marginLeft: "18px" }} />
          </Button>
        </BoxSave>
      </BoxBetSave>
    </>
  );
};

export default Cart;
