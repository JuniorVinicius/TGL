import { BoxNumbers, Number } from "./Numbers";
import { useState, useEffect, useContext, useCallback } from "react";
import { ChosenNumbers } from "./../../context/test";

interface IBet {
  randomValues: any[];
}

let DUMMY_ARRAY: any[] = [];

for (let x = 1; x <= 25; x++) {
  DUMMY_ARRAY.push({ id: x.toString(), clicked: false });
}

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
  const [click, setClick] = useState<boolean>(false);
  const { setChosenValue } = useContext(ChosenNumbers);

  let { randomValues } = props;

  const handleClick = (value: any) => {
    setClick(true);
    if (count >= 6 && value.clicked === false) {
      alert("maximum");
    } else {
      setColor("#000");

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
    setChosenValue(choosen);
  };

  const verify = useCallback(() => {
    const array = DUMMY_ARRAY.filter((number) => !!number.clicked);
    setChoosen(array);

    // if(click){
    //   setChosenValue(array);
    // }
    
  },[]);

  // const verify = () => {
  //   const array = DUMMY_ARRAY.filter((number) => !!number.clicked);
  //   setChoosen(array);

    // // if(click){
    // //   setChosenValue(array);
    // // }
    // // console.log(click);
  // };

  useEffect(() => {
    //verify()
    if (randomValues) {
      generateNumbers(25);
      DUMMY_ARRAY.forEach((element) => {
        randomValues.forEach((value) => {
          if (element.id === value.toString() && !element.clicked) {
            setColor("#000");
            element.clicked = !element.clicked;
          }
        });
      });
      setCount(randomValues.length);
    }
    verify();
    //setClick(true)
    console.log(randomValues);
  }, [randomValues]);

  // console.log("Cart :>> ", choosen);

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

export default Numbers;
