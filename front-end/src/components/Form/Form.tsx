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

import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  name: string;
  email: string;
  password: string;
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
    onGoTo,
  } = props;

  const { register, handleSubmit } = useForm<Inputs>();

  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  async function validateInputs(inputData: Inputs) {
    const { name, email, password } = inputData;
    try {
      const nameSchema = Yup.object().shape({
        name: Yup.string().required(),
      });

      const emailSchema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Por favor, informe um email válido!"),
      });
      const passworSchema = Yup.object().shape({
        password: Yup.string().required("Por favor, informe uma senha!"),
      });

      if (title === "Registration") {
        await nameSchema.validate({ name: name });
      }

      await emailSchema.validate({ email: email });

      if (title !== "Reset password") {
        await passworSchema.validate({ password: password });
      }

      onSubmitForm({ name, email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err.message);
        if (err.message === "email must be a valid email") {
          notifyError("Por favor, informe um email válido!");
        } else if (err.message === "name is a required field") {
          notifyError("Por favor, informe um nome de usuário!");
        } else {
          notifyError(err.message);
        }
      }
    }
  }

  return (
    <>
      <BoxForm onSubmit={handleSubmit(validateInputs)}>
        <Title>{title}</Title>
        <Form>
          {title === "Registration" && (
            <BoxInput>
              <Input type="text" placeholder="Name" {...register("name")} />
            </BoxInput>
          )}
          <BoxInput>
            <Input type="text" placeholder="Email" {...register("email")} />
          </BoxInput>

          {title !== "Reset password" && (
            <BoxInput>
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
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