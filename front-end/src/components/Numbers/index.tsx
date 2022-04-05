import { useState, useEffect, useContext, useCallback, memo } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { cartActions } from "@store/cart-slice";
import { ChosenNumbers } from "@context/index";

import { IBet, INumbers } from "./interfaces";
import { BoxNumbers, Number } from "./style";

let NUMBERS_BET: INumbers[] = [];

const Numbers = (props: IBet) => {
  const [color, setColor] = useState("");
  const [choosen, setChoosen] = useState<INumbers[]>([]);
  const [, setNumbersRanges] = useState<JSX.Element[]>([]);
  const [count, setCount] = useState<number>(0);
  const { setChosenValue } = useContext(ChosenNumbers);
  const dispatch = useDispatch();
  let {
    randomValues,
    numbersColor,
    maxRange,
    maxNumber,
    addCart,
    betType,
    betPrice,
    betId,
  } = props;

  const generateNumbers = (range: number) => {
    NUMBERS_BET = [];
    for (let x = 1; x <= range; x++) {
      NUMBERS_BET.push({ id: x.toString(), clicked: false });
    }
    newNumbers();
  };

  const printMessages = (message: string) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClick = (value: any) => {
    if (count >= maxNumber && value.clicked === false) {
      const message = `O número máximo de escolhas são: ${maxNumber} números!`;
      printMessages(message);
    } else {
      setColor(numbersColor);

      NUMBERS_BET.forEach((element) => {
        if (element.id === value.id) {
          element.clicked = !value.clicked;

          if (value.clicked === false) {
            setCount((prev) => prev - 1);
          } else {
            setCount((prev) => prev + 1);
          }
        }
      });
    }
    verify();
    verifyClickeds();
  };

  const verifyClickeds = useCallback(() => {
    const array = NUMBERS_BET.filter((number) => !!number.clicked);
    setChosenValue(array);
  }, [setChosenValue]);

  const verify = useCallback(() => {
    const array = NUMBERS_BET.filter((number) => !!number.clicked);
    setChoosen(array);
  }, []);

  const newNumbers = () => {
    const numbers = NUMBERS_BET.map((number: any) => {
      return (
        <Number
          key={Math.random() * number.id}
          clicked={number.clicked}
          color={color}
          onClick={() => handleClick(number)}
        >
          {number.id.padStart(2, "0")}
        </Number>
      );
    });

    setNumbersRanges(numbers);
  };

  useEffect(() => {
    generateNumbers(maxRange);
    setCount(0);
    setChosenValue([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxRange, maxNumber]);

  useEffect(() => {
    if (randomValues) {
      generateNumbers(maxRange);
      NUMBERS_BET.forEach((element) => {
        randomValues.forEach((value) => {
          if (element.id === value.toString() && !element.clicked) {
            setColor(numbersColor);
            element.clicked = !element.clicked;
          }
        });
      });
      setCount(randomValues.length);
    }
    verify();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomValues]);

  useEffect(() => {
    if (choosen.length > 0 && choosen.length === maxNumber) {
      const numbers = choosen.map((number) => parseInt(number.id));
      dispatch(
        cartActions.addItemToCart({
          id: Math.random() * 1,
          numbers: numbers,
          color: color,
          typeGame: betType,
          price: betPrice,
          typeGameId: betId,
        })
      );

      generateNumbers(maxRange);
      setCount(0);
      setChosenValue([]);
    } else {
      if (addCart !== undefined) {
        let missingValue = maxNumber - choosen.length;
        let baseStrings = ["Faltam", "números", "alguns"];
        if (missingValue === 1) {
          baseStrings = ["Falta", "número", "algum"];
        }
        const message = `${baseStrings[0]} ${missingValue} ${baseStrings[1]}! Escolha mais ${baseStrings[2]}!`;
        printMessages(message);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addCart]);

  const numbers = NUMBERS_BET.map((number: any) => {
    return (
      <Number
        key={Math.random() * number.id}
        clicked={number.clicked}
        color={color}
        onClick={() => handleClick(number)}
      >
        {number.id.padStart(2, "0")}
      </Number>
    );
  });


  return (
    <>
      <BoxNumbers>{numbers}</BoxNumbers>
    </>
  );
};

export default memo(Numbers);
