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

import { useForm, SubmitHandler } from "react-hook-form";

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
  onSubmitForm: SubmitHandler<Inputs>;
  onForgetPassword?: () => void;
  onGoTo?: () => void;
};


type Inputs = {
  name: string,
  email: string,
  password: string
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

  const { register, handleSubmit } = useForm<Inputs>();


  return (
    <>
      <BoxForm onSubmit={handleSubmit(onSubmitForm)} >
        <Title>{title}</Title>
        <Form>
          {title === "Registration" && (
            <BoxInput>
              <Input type="text" placeholder="Name" {...register("name")}/>
            </BoxInput>
          )}
          <BoxInput>
            <Input type="text" placeholder="Email"  {...register("email")}/>
          </BoxInput>

          {title !== "Reset password" && (
            <BoxInput>
              <Input type="password" placeholder="Password" {...register("password")}/>
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
