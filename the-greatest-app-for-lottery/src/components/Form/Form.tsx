import {
  BoxForm,
  Form,
  BoxInput,
  Input,
  BoxForgetPassword,
  BoxButtonSubmit,
  BoxButton,
  Title,
} from "./index";

import { Button } from "./../../UI/Button/Button";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type FormType = {
  marginTop?: boolean;
  title: string;
  buttonSubmitColor?: string;
  buttonSubmitTitle?: string;
  buttonActionTitle?: string;
  arrowSubmitLeft?: boolean;
  arrowSubmitRight?: boolean;
  arrowActionLeft?: boolean;
  arrowActionRight?: boolean;
  sizeButton?: number;
  onSubmitForm?: () => void;
  onForgetPassword?: () => void;
  onGoTo?: () => void;
};

const FormAuth = (props: FormType) => {
  const {
    marginTop,
    title,
    buttonSubmitColor,
    buttonSubmitTitle,
    buttonActionTitle,
    arrowSubmitLeft,
    arrowSubmitRight,
    arrowActionLeft,
    arrowActionRight,
    sizeButton,
    onSubmitForm,
    onForgetPassword,
    onGoTo
  } = props;

  return (
    <>
      <BoxForm onSubmit={onSubmitForm}>
        <Title>{title}</Title>
        <Form>
          {title === "Registration" && (
            <BoxInput>
              <Input type="text" name="name" placeholder="Name" />
            </BoxInput>
          )}
          <BoxInput>
            <Input type="text" name="email" placeholder="Email" />
          </BoxInput>

          {title !== "Reset password" && (
            <BoxInput>
              <Input type="password" name="password" placeholder="Password" />
            </BoxInput>
          )}

          {title === "Authentication" && (
            <BoxForgetPassword>
              <span onClick={onForgetPassword}>I forget my password</span>
            </BoxForgetPassword>
          )}

          <BoxButtonSubmit marginTop={marginTop}>
            <Button type="submit" color={buttonSubmitColor} size={sizeButton}>
              {arrowSubmitLeft && (
                <BsArrowLeft style={{ marginRight: "19px" }} />
              )}
              {buttonSubmitTitle}
              {arrowSubmitRight && (
                <BsArrowRight style={{ marginLeft: "19px" }} />
              )}
            </Button>
          </BoxButtonSubmit>
        </Form>

        <BoxButton>
          <Button size={sizeButton} onClick={onGoTo}>
            {arrowActionLeft && <BsArrowLeft style={{ marginRight: "19px" }} />}
            {buttonActionTitle}
            {arrowActionRight && (
              <BsArrowRight style={{ marginLeft: "19px" }} />
            )}
          </Button>
        </BoxButton>
      </BoxForm>
    </>
  );
};

export default FormAuth;
