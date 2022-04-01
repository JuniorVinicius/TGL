import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { toast } from "react-toastify";

import ActionButtons from "../../../UI/Button/ActionButtons";
import {
  BoxForm,
  TitleForm,
  Form,
  BoxInput,
  Label,
  InputConteiner,
  Input,
} from "./style";
import { InputUser } from "./interface";

const FormUpdateUser = () => {
  const { register, handleSubmit  } = useForm<InputUser>();

  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  async function validateInputs(inputData: InputUser) {
    const { name, email } = inputData;
    try {
      const nameSchema = Yup.object().shape({
        name: Yup.string().required(),
      });

      const emailSchema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Por favor, informe um email válido!"),
      });

      await nameSchema.validate({ name: name });
      await emailSchema.validate({ email: email });

      console.table({ name, email });
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
        <TitleForm>Update User</TitleForm>
        <Form>
          <BoxInput>
            <Label htmlFor="name">Name</Label>
            <InputConteiner>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                {...register("name") }
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>
          <BoxInput>
            <Label htmlFor="email">Email</Label>
            <InputConteiner>
              <Input
                id="email"
                type="text"
                placeholder="Email"
                {...register("email")}
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>

          <ActionButtons name="Update" submit={true} onHandleClick={() => {}} />
        </Form>
      </BoxForm>
    </>
  );
};

export default FormUpdateUser;
