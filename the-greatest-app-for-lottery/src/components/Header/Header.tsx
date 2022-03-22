import { HeaderBox, Box, ConteinerButton, LogoBar } from "./index";
import { Button } from "./../../UI/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

type HeaderType = {
  homeButton?: boolean;
  hasCartButton?: boolean;
};

const Header = (props: HeaderType) => {
  const { homeButton, hasCartButton } = props;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <HeaderBox className={`${clicked ? "clicked" : ""}`}>
        <Box>
          <span className={`${clicked && "clicked-logo"}`}>TGL</span>
          {homeButton && <Button fontSize={20}>Home</Button>}
        </Box>

        <Box className={`box-logout ${clicked ? "clicked" : ""}`}>
          <ConteinerButton>
            <Button fontSize={20}>Account</Button>
          </ConteinerButton>
          <ConteinerButton className="button-logout">
            <Button fontSize={20}>
              Log out <BsArrowRight style={{ marginLeft: "10px" }} />
            </Button>
          </ConteinerButton>
        </Box>

        <div className="box-buttons">
          <button onClick={handleClick}>
            <GoThreeBars size={20} />
          </button>

          {hasCartButton && <div>
            <button>
              <AiOutlineShoppingCart size={20} />
            </button>
            10
          </div>}
        </div>
      </HeaderBox>

      <LogoBar className={`${clicked && "clicked-bar"}`} />
    </>
  );
};

export default Header;
