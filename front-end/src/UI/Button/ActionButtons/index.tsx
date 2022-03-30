import { memo } from "react";
import { Button } from "./style";
import { IButtonType } from "./interfaces";

const ActionButton = (props: IButtonType) => {
  const { name, hasBackground, icon, onHandleClick } = props;
  return (
    <>
      <Button background={hasBackground} onClick={onHandleClick}>
        {icon}
        {name}
      </Button>
    </>
  );
};

export default memo(ActionButton);
