import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@store/cart-slice";
import { BsArrowRight } from "react-icons/bs";

import { Button } from "@ui/index";
import ItemCart from "./Item";
import { IProps, ICartItems } from "./interfaces";

import {
  BoxBetSave,
  Itens,
  TitleCart,
  Total,
  BoxSave,
  EmptyCart,
} from "./style";
import { convertValues } from "../../shared/helpers";

const Cart = (props: IProps) => {
  const { hasBorder, hasSave, hasMarginTop, hasWidth } = props;
  const [total, setTotal] = useState<number>(0);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CART = useSelector((state: ICartItems) => state.cart.items);
  
  const min_cart_value = useSelector(
    (state: ICartItems) => state.cart.min_cart_value
  );

  useEffect(() => {
    let total = 0;
    CART.forEach((item) => {
      total += item.price;
    });
    setTotal(total);
  }, [CART]);

  const items = CART.map((item) => {
    const numbers: string[] = item.numbers.map((number: any) =>
      number.toString().padStart(2, "0")
    );
    return (
      <ItemCart
        id={item.id}
        key={item.id}
        color={item.color}
        game={item.typeGame}
        amount={convertValues(item.price).toString()}
        numbers={numbers.join(", ")}
      />
    );
  });

  const handleClickSave = () => {
    if (total < min_cart_value) {
      toast(
        `⚠️ O valor minímo é de: ${convertValues(
          min_cart_value
        )}. Adicione mais ${convertValues(min_cart_value - total)} em apostas.`,
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      dispatch(cartActions.saveBetData());
      setTimeout(() => {
        navigate("/home");
      } , 900);
    }
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
