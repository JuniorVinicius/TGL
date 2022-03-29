import { Filter } from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
import { ChosenNumbers } from "../context";

import games from "./../shared/services/games/index";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const NewBet = () => {
  const [random, setRandom] = useState<any[]>([]);
  const [chosen, setChosen] = useState<any[]>([]);
  const [dataBetsTypes, setDataBetsTypes] = useState<any[]>([]);
  const [betTitle, setBetTitle] = useState<string>("");
  const [betDescription, setBetDescription] = useState<string>("");
  const [filterBackground, setFilterBackground] = useState<string>("");
  const [dataBetRange, setDataBetRange] = useState<number>(0);
  const [betPrice, setBetPrice] = useState<number>(0);
  const [dataBetMaxNumbers, setDataBetMaxNumbers] = useState<number>(0);
  const [dataTypeId, setDataTypeId] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>();

  const { chosenValue, setChosenValue } = useContext(ChosenNumbers);
  const dispatch = useDispatch();
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

  const addToCart = () => {
    setClicked((prev) => !prev);
  };

  const allBets = async () => {
    try {
      const responseGame = await listGames();
      setDataBetsTypes(responseGame?.data.types);
      dispatch(cartActions.getMinCartValue(responseGame?.data.min_cart_value));
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
    setBetPrice(typeBet.price);
    setDataTypeId(typeBet.id);
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
            addCart={clicked}
            betType={betTitle}
            betPrice={betPrice}
            betId={dataTypeId}
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
              onHandleClick={addToCart}
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
          <Cart
            hasBorder={true}
            hasSave={true}
            hasMarginTop={true}
            hasWidth={true}
          />
        </BoxCart>
      </MainConteiner>

      <Footer />
    </>
  );
};

export default memo(NewBet);
