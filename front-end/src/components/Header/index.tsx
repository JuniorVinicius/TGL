import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { BsArrowRight } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Cart from "../Cart";
import { Button } from "../../UI/Button/Button";
import CustomPopup from "../../UI/Modal/index";
import { HeaderType, ITotalCart } from "./interfaces";
import { HeaderBox, Box, ConteinerButton, LogoBar} from "./style";

const Header = (props: HeaderType) => {
  const [total, setTotal] = useState<number>(0);
  const { homeButton, hasCartButton, hasAccountButton } = props;
  const [clicked, setClicked] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalQuantityInCart = useSelector(
    (state: ITotalCart) => state.cart.totalQuantity
  );
  const CART = useSelector((state: ITotalCart) => state.cart.items);
  const min_cart_value = useSelector(
    (state: ITotalCart) => state.cart.min_cart_value
  );

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClickHome = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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

  const handleClickSave = () => {
    let message: string;
    if (total < min_cart_value) {
      message = `⚠️ O valor minímo é de: ${convertValues(
        min_cart_value
      )}. Adicione mais ${convertValues(min_cart_value - total)} em apostas.`;
    } else {
      message = "✅ Aposta adicionada com sucesso!";
      dispatch(cartActions.saveBetData());
      setTimeout(() => {
        navigate("/home");
      } , 900);
    }
    toast(message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClickAccount = () =>{
    navigate("/account");
  }

  return (
    <>
      <HeaderBox
        hasCartButton={hasCartButton}
        className={`${clicked ? "clicked" : ""}`}
      >
        <Box>
          <span
            className={`${clicked && "clicked-logo"}`}
            onClick={handleClickHome}
          >
            TGL
          </span>
          {homeButton && (
            <Button
              fontSize={20}
              className="header-button"
              onClick={handleClickHome}
            >
              Home
            </Button>
          )}
        </Box>


        <Box className={`box-logout ${clicked ? "clicked" : ""}`}>
          <ConteinerButton>
            {!hasAccountButton && <Button fontSize={20} className="header-button" onClick={handleClickAccount}>
              Account
            </Button>}
          </ConteinerButton>
          <ConteinerButton className="button-logout">
            <Button
              fontSize={20}
              className="header-button"
              onClick={handleLogout}
            >
              Log out <BsArrowRight style={{ marginLeft: "10px" }} />
            </Button>
          </ConteinerButton>
        </Box>

        <div className="box-buttons">
          <button onClick={handleClick}>
            <GoThreeBars size={20} />
          </button>

          {hasCartButton && (
            <CustomPopup
              execute={handleClickSave}
              open={
                <div>
                  <button>
                    <AiOutlineShoppingCart size={20} />
                  </button>
                  {totalQuantityInCart}
                </div>
              }
              content={<Cart />}
              titleButton={"Salvar"}
            />
          )}
        </div>

      </HeaderBox>

      <LogoBar className={`${clicked && "clicked-bar"}`} />
    </>
  );
};

export default memo(Header);
