import { Button } from "./ActionButtons";

type ButtonType = {
  name: string;
  hasBackground?: boolean;
  icon?: any;
};

const ActionButton = (props: ButtonType) => {
  const { name, hasBackground, icon } = props;
  return (
    <>
      <Button background={hasBackground}>
        {icon}
        {name}
      </Button>
    </>
  );
};

export default ActionButton;
