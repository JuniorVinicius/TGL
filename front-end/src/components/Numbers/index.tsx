import { BoxNumbers, Number } from "./Numbers";
import { useState, useEffect } from "react";

const DUMMY_ARRAY: any[] = [];

for (let x = 1; x <= 25; x++) {
  DUMMY_ARRAY.push({ id: x.toString(), clicked: false });
}

interface IBet {
  randomValues?: number[];
}

const Numbers = (props: IBet) => {
  const [color, setColor] = useState("");
  const [clicked, setClicked] = useState(false);
  const [choosen, setChoosen] = useState<any[]>();
  const [count, setCount] = useState<number>(0);

  let { randomValues } = props;
  
  const handleClick = (value: any) => {
    if (count >= 6 && value.clicked === false) {
      alert("maximum");
    } else {
      setColor("#0f0");
      setClicked(!clicked);

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

  console.log("Cart :>> ", choosen);

  useEffect(() => {
    DUMMY_ARRAY.forEach((element) => {
      randomValues?.forEach((value) => {
        if (element.id === value.toString()) {
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

  return (
    <>
      <BoxNumbers>{numbers}</BoxNumbers>
    </>
  );
};

export default Numbers;
