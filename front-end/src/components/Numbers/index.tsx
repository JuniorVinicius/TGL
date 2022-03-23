import { BoxNumbers, Number } from "./Numbers";
import { useState } from "react";

const DUMMY_ARRAY: any[] = [];

for (let x = 1; x <= 25; x++) {
  DUMMY_ARRAY.push({ id: x, clicked: false });
}

const Numbers = () => {
  const [color, setColor] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClick = (value: any) => {
    setClicked(!clicked);
    setColor("#000");

    DUMMY_ARRAY.forEach((element) => {
      if (element.id === value.id) {
        value.clicked = !clicked;
        console.log(value.id);
      }
    });
  };

  const numbers = DUMMY_ARRAY.map((number: any) => {
    return (
      <Number
        key={Math.random() * number.id}
        clicked={number.clicked}
        color={color}
        onClick={() => handleClick(number)}
      >
        {number.id}
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
