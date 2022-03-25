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
  BoxCart,
} from "./../components/NewBetContent/index";
import { Box } from "../UI/Conteiner/Conteiner";
import ActionButton from "../UI/Button/ActionButtons";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./../components/Cart/index";
import { useState } from "react";
import { useContext } from "react";
import { ChosenNumbers } from "./../context/test";
import { useEffect } from "react";
import games from './../shared/services/games/index';

const NewBet = () => {
  const [random, setRandom] = useState<any[]>([]);
  const [chosen, setChosen] = useState<any[]>([]);
  const [dataBetsTypes, setDataBetsTypes] = useState<any[]>([]);
  const [betTitle, setBetTitle] = useState<string>('');
  const [betDescription, setBetDescription] = useState<string>('');

  const [filterBackground, setFilterBackground] = useState<string>("");


  const { chosenValue } = useContext(ChosenNumbers);
  const { listGames } = games();

  useEffect(() => {
    const numbers: any[] = [];

    chosenValue.forEach((element) => {
      numbers.push(Number(element.id));
    });
    setChosen(numbers);
    
  }, [chosenValue]);

  useEffect(()=>{
    allBets()
  },[])

  const randomNumbers = () => {
    const numbers: any[] = [];

    numbers.push(...chosen);
      let x = 0;
      while (x <= 6) {
        const randomNumber = Math.floor(Math.random() * 25) + 1;
        if (
          numbers.some((number) => number === randomNumber) ||
          randomNumber === 0
        ) {
          x--;
        } else {
          if (numbers.length < 6) {
            numbers.push(randomNumber);
            x++;
          } else {
            break;
          }
        }

      setRandom(numbers);
    }
  };

  const allBets = async () => {
    try {
      const responseGame = await listGames();
      console.log(responseGame?.data.types);
      setDataBetsTypes(responseGame?.data.types);
      handleChange(responseGame?.data.types[0])
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (typeBet:any) => {
    setFilterBackground(typeBet.color);
    setBetTitle(typeBet.type.toUpperCase())
    setBetDescription(typeBet.description)
  };

  const typeGames = dataBetsTypes?.map((typeBet) => {
    return (
      <Filter
        onClick={() => handleChange(typeBet)}
        key={Math.random()}
        color={typeBet.color}
        background={filterBackground}
      >
        {typeBet.type}
      </Filter>
    );
  });

  return (
    <>
      <Header homeButton={true} hasCartButton={true} />

      <MainConteiner className="new-bet">
        <BoxBetNumbers>
          <TitleBet>
            <Emphasis>NEW BET</Emphasis> FOR {betTitle}
          </TitleBet>

          <Label>Choose Game</Label>

          <div>
            {typeGames}
          </div>

          <Description>
            <Emphasis>Fill your bet Mark</Emphasis>
            <br />{betDescription}
          </Description>

          <Numbers randomValues={random} numbersColor={filterBackground}/>

          <Box className="main-box">
            <Box>
              <ActionButton
                name="Complete game"
                onHandleClick={randomNumbers}
              />
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
          <Cart />
        </BoxCart>
      </MainConteiner>

      <Footer />
    </>
  );
};

export default NewBet;
