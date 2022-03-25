import { Button } from "./ActionButtons";
import { memo } from 'react';

type ButtonType = {
  name: string;
  hasBackground?: boolean;
  icon?: any;
  onHandleClick?: any;
};

const ActionButton = (props: ButtonType) => {
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
