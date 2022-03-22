import { Filter } from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import { MainConteiner } from "../UI/Conteiner/MainConteiner";
import Numbers from "./../components/Numbers/index";
import {
  TitleBet,
  Emphasis,
  Label,
  Description,
  BoxBetNumbers,
  BoxCart
} from "./../components/NewBetContent/index";
import { Box } from "../UI/Conteiner/Conteiner";
import ActionButton from "../UI/Button/ActionButtons";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './../components/Cart/index';

const NewBet = () => {
  return (
    <>
      <Header homeButton={true} hasCartButton={true}/>

      <MainConteiner className="new-bet">
        <BoxBetNumbers>
          <TitleBet>
            <Emphasis>NEW BET</Emphasis> FOR MEGA-SENA
          </TitleBet>

          <Label>Choose Game</Label>

          <div>
            <Filter color="#7F3992">Lotofácil</Filter>
            <Filter color="#01AC66">Mega-Sena</Filter>
            <Filter color="#F79C31">Lotomania</Filter>
          </div>

          <Description>
            <Emphasis>Fill your bet Mark</Emphasis>
            <br /> as many numbers as you want up to a maximum of 50. Win by
            hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
          </Description>

          <Numbers />

          <Box className="main-box">
            <Box>
              <ActionButton name="Complete game" />
              <ActionButton name="Clear game" />
            </Box>

            <ActionButton
              name="Add to cart"
              hasBackground={true}
              icon={
                <AiOutlineShoppingCart
                  size={25}
                  style={{ marginRight: "28px" }}
                />
              }
            />
          </Box>
        </BoxBetNumbers>

        <BoxCart>
            <Cart/>
        </BoxCart>
      </MainConteiner>

      <Footer />
    </>
  );
};

export default NewBet;
