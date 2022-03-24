import { BoxNumbers, Number } from "./Numbers";
import { useState, useEffect } from "react";

let DUMMY_ARRAY: any[] = [];

interface IBet {
  randomValues?: number[];
}

for (let x = 1; x <= 25; x++) {
  DUMMY_ARRAY.push({ id: x.toString(), clicked: false });
}

const generateNumbers = (range: number) => {
  DUMMY_ARRAY = []
  for (let x = 1; x <= range; x++) {
    DUMMY_ARRAY.push({ id: x.toString(), clicked: false });
  }
}

const Numbers = (props: IBet) => {
  const [color, setColor] = useState("");
  const [choosen, setChoosen] = useState<any[]>();
  const [count, setCount] = useState<number>(0);

  let { randomValues } = props;

  const handleClick = (value: any) => {
    if (count >= 6 && value.clicked === false) {
      alert("maximum");
    } else {
      setColor("#0f0");

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
  };

  
  const verify = () => {
    const array = DUMMY_ARRAY.filter((number) => !!number.clicked);
    setChoosen(array);
  };

  useEffect(() => {
    if(randomValues){
      generateNumbers(30)
      DUMMY_ARRAY.forEach((element) => {
        randomValues?.forEach((value) => {
          if (element.id === value.toString() && !element.clicked) {
            setColor("#0f0");
            element.clicked = !element.clicked;
          }
        });
  
      });
         
      if(randomValues){
        verify();
        setCount(randomValues.length);
      }
  
      console.log('randomValues :>> ', randomValues);
    }
    
  },[randomValues]);

  console.log("Cart :>> ", choosen);
  console.log("Count :>> ", count);

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
