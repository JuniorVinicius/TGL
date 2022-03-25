import { BoxNumbers, Number } from "./Numbers";
import { useState, useEffect, useContext, useCallback, memo } from "react";
import { ChosenNumbers } from "./../../context/test";

interface IBet {
  randomValues: any[];
  numbersColor: string;
}

let DUMMY_ARRAY: any[] = [];

const generateNumbers = (range: number) => {
  DUMMY_ARRAY = [];
  for (let x = 1; x <= range; x++) {
    DUMMY_ARRAY.push({ id: x.toString(), clicked: false });
  }
};

const Numbers = (props: IBet) => {
  const [color, setColor] = useState("");
  const [choosen, setChoosen] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const { setChosenValue } = useContext(ChosenNumbers);

  let { randomValues, numbersColor } = props;

  const handleClick = (value: any) => {
    if (count >= 6 && value.clicked === false) {
      alert("maximum");
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
    //setChosenValue(array);
  }, []);

  useEffect(()=>{
    for (let x = 1; x <= 25; x++) {
      DUMMY_ARRAY.push({ id: x.toString(), clicked: false });
    }
  },[])

  useEffect(() => {
    if (randomValues) {
      generateNumbers(25);
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

  console.log("Cart :>> ", choosen);

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

  return (
    <>
      <BoxNumbers>{numbers}</BoxNumbers>
    </>
  );
};

export default memo(Numbers);
