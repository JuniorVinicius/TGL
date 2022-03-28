import { useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button/Button";
import {
  BoxBetSave,
  Itens,
  TitleCart,
  Total,
  BoxSave,
  EmptyCart,
} from "./Cart";
import ItemCart from "./Item";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import saveBet from './../../shared/services/bet/newbets/index';

interface ICart {
  items: any[];
}

interface ICartItems {
  cart: ICart;
}

interface IProps {
  hasBorder?: boolean;
  hasSave?: boolean;
  hasMarginTop?: boolean;
  hasWidth?: boolean;
}

const Cart = (props: IProps) => {
  const { hasBorder, hasSave, hasMarginTop, hasWidth } = props;

  const { save } = saveBet();

  const navigate = useNavigate();
  const [total, setTotal] = useState<number>(0);

  const CART = useSelector((state: ICartItems) => state.cart.items);

  const convertValues = (value: number) => {
    return `R$ ${Number(value)
      .toFixed(2)
      ?.toString()
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  useEffect(() => {
    let total = 0;
    CART.forEach((item) => {
      total += item.price;
    });
    setTotal(total);
  }, [CART]);

  const items = CART.map((item) => {
    const numbers: string[] = item.numbers.map((number:any) => 
      number.toString().padStart(2, "0")
    );
    return (
      <ItemCart
        id={item.id}
        key={item.id}
        color={item.color}
        game={item.typeGame}
        amount={convertValues(item.price)}
        numbers={numbers.join(', ')}
      />
    );
  });

  const handleClickSave = async () => {
    const saved: any[] = []
    CART.forEach((item) => {
      saved.push({
        game_id: item.typeGameId,
        numbers: item.numbers,

      })
    });
    await save(JSON.stringify({games:[...saved]}));
    navigate("/home");
  };
  return (
    <>
      <BoxBetSave
        border={hasBorder}
        marginTop={hasMarginTop}
        hasWidth={hasWidth}
      >
        <TitleCart>CART</TitleCart>
        <Itens>
          {CART.length > 0 ? items : <EmptyCart>Empty cart</EmptyCart>}
        </Itens>

        <Total>
          <span>CART</span> TOTAL: {convertValues(total)}
        </Total>

        {hasSave && (
          <BoxSave>
            <Button
              fontSize={35}
              color="var(--main-button)"
              onClick={handleClickSave}
            >
              Save
              <BsArrowRight style={{ marginLeft: "18px" }} />
            </Button>
          </BoxSave>
        )}
      </BoxBetSave>
    </>
  );
};

export default memo(Cart);
