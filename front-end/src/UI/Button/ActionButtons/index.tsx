import { memo } from "react";
import { Button } from "./style";
import { IButtonType } from "./interfaces";

const ActionButton = (props: IButtonType) => {
  const { name, hasBackground, icon, onHandleClick, submit } = props;
  return (
    <>
      <Button background={hasBackground} onClick={onHandleClick} type={submit ?"submit" : 'button'}>
        {icon}
        {name}
      </Button>
    </>
  );
};

export default memo(ActionButton);
