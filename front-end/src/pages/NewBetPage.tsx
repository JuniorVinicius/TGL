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
import { useContext, memo, useEffect, useState } from "react";
import { ChosenNumbers } from "./../context/test";

import games from "./../shared/services/games/index";
import { toast } from "react-toastify";

const NewBet = () => {
  const [random, setRandom] = useState<any[]>([]);
  const [chosen, setChosen] = useState<any[]>([]);
  const [dataBetsTypes, setDataBetsTypes] = useState<any[]>([]);
  const [betTitle, setBetTitle] = useState<string>("");
  const [betDescription, setBetDescription] = useState<string>("");
  const [filterBackground, setFilterBackground] = useState<string>("");
  const [dataBetRange, setDataBetRange] = useState<number>(0);
  const [dataBetMaxNumbers, setDataBetMaxNumbers] = useState<number>(0);

  const { chosenValue, setChosenValue } = useContext(ChosenNumbers);
  const { listGames } = games();

  useEffect(() => {
    const numbers: any[] = [];
    chosenValue.forEach((element) => {
      numbers.push(Number(element.id));
    });
    setChosen(numbers);
  }, [chosenValue]);

  useEffect(() => {
    allBets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomNumbers = () => {
    const numbers: any[] = [];

    numbers.push(...chosen);
    if (numbers.length >= dataBetMaxNumbers) {
      toast.info(
        `Você já ecolheu todos os ${dataBetMaxNumbers} números! Para selecionar novos números, desmarque algum dos selecionados ou limpe o jogo.`,
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }

    let x = 0;
    while (x <= dataBetMaxNumbers) {
      const randomNumber = Math.floor(Math.random() * dataBetRange) + 1;
      if (
        numbers.some((number) => number === randomNumber) ||
        randomNumber === 0
      ) {
        x--;
      } else {
        if (numbers.length < dataBetMaxNumbers) {
          numbers.push(randomNumber);
          x++;
        } else {
          break;
        }
      }

      setRandom(numbers);
    }
  };

  const clearGame = () => {
    setRandom([]);
    setChosenValue([]);
  };

  const allBets = async () => {
    try {
      const responseGame = await listGames();
      setDataBetsTypes(responseGame?.data.types);
      handleChange(responseGame?.data.types[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (typeBet: any) => {
    setFilterBackground(typeBet.color);
    setBetTitle(typeBet.type.toUpperCase());
    setBetDescription(typeBet.description);
    setDataBetRange(typeBet.range);
    setDataBetMaxNumbers(typeBet.max_number);
    setChosen([]);
    setChosen([]);
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

          <div>{typeGames}</div>

          <Description>
            <Emphasis>Fill your bet Mark</Emphasis>
            <br />
            {betDescription}
          </Description>

          <Numbers
            maxRange={dataBetRange}
            maxNumber={dataBetMaxNumbers}
            randomValues={random}
            numbersColor={filterBackground}
          />

          <Box className="main-box">
            <Box>
              <ActionButton
                name="Complete game"
                onHandleClick={randomNumbers}
              />
              <ActionButton name="Clear game" onHandleClick={clearGame} />
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

export default memo(NewBet);
