import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { toast } from "react-toastify";

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
import updateUser from "../../../shared/services/user/updateUser";
import { Button } from "../FormAdm/style";
import CustomPopup from "../../../UI/Modal";

const FormUpdateUser = () => {
  const { register, handleSubmit } = useForm<InputUser>();
  const [dataInputs, setDataInputs] = useState<any>({ email: "", name: "" });
  const { newDataUser } = updateUser();

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

  const updateAcccount = async () => {
    const { email, name } = dataInputs;
    if (email && name) {
      try {
        await toast.promise(newDataUser({ email, name }), {
          pending: "Carregando...",
          success: "Conta atualizada com sucesso!",
        });

        window.location.reload();
      } catch (err) {
        notifyError("Erro ao atualizar conta.");
      }
    }
  };

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

      setDataInputs({ email, name });
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

  // const newButtons = useCallback(() => {
  //   const renderButtons =
  //     dataInputs.email && dataInputs.name ? (
  //       <CustomPopup
  //         title="Update User"
  //         content={"Deseja realmente atualizar esta conta?"}
  //         execute={updateAcccount}
  //         open={<Button type="submit">Update</Button>}
  //       />
  //     ) : (
  //       <Button type="submit">Update</Button>
  //     );

  //   return renderButtons;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dataInputs.email && dataInputs.name]);

  // const renderButtons = newButtons();

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
                {...register("name")}
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

          <CustomPopup
            title="Update User"
            content={"Deseja realmente atualizar esta conta?"}
            execute={updateAcccount}
            open={<Button type="submit">Update</Button>}
          />
        </Form>
      </BoxForm>
    </>
  );
};

export default FormUpdateUser;
