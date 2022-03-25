import { BoxNumbers, Number } from "./Numbers";
import { useState, useEffect, useContext, useCallback, memo } from "react";
import { ChosenNumbers } from "./../../context/test";
import { toast } from 'react-toastify';

interface IBet {
  randomValues: any[];
  numbersColor: string;
  maxRange: number;
  maxNumber: number
}

let DUMMY_ARRAY: any[] = [];

const Numbers = (props: IBet) => {
  const [color, setColor] = useState("");
  const [choosen, setChoosen] = useState<any[]>([]);
  const [numbersRanges, setNumbersRanges] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const { setChosenValue } = useContext(ChosenNumbers);
  let { randomValues, numbersColor, maxRange, maxNumber } = props;

  const generateNumbers = (range: number) => {
    DUMMY_ARRAY = [];
    for (let x = 1; x <= range; x++) {
      DUMMY_ARRAY.push({ id: x.toString(), clicked: false });
    }

    newNumbers();
  };

  const handleClick = (value: any) => {
    if (count >= maxNumber && value.clicked === false) {
      toast.info(`O número máximo de escolhas são: ${maxNumber} números!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      setColor(numbersColor);

      DUMMY_ARRAY.forEach((element) => {
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
    const array = DUMMY_ARRAY.filter((number) => !!number.clicked);
    setChosenValue(array);
  }, [setChosenValue]);

  const verify = useCallback(() => {
    const array = DUMMY_ARRAY.filter((number) => !!number.clicked);
    setChoosen(array);
  }, []);

  useEffect(() => {
    generateNumbers(maxRange);
    setCount(0)
  }, [maxRange,maxNumber]);

  useEffect(() => {
    if (randomValues) {
      generateNumbers(maxRange);
      DUMMY_ARRAY.forEach((element) => {
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

  const numbers = DUMMY_ARRAY.map((number: any) => {
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

  const newNumbers = () => {
    const numbers = DUMMY_ARRAY.map((number: any) => {
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


  return (
    <>
      <BoxNumbers>{numbers}</BoxNumbers>
    </>
  );
};

export default memo(Numbers);
