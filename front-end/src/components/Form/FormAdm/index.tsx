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
  IputDescription,
  BoxButtons,
  Button,
} from "./style";
import { InputUser, IProps } from "./interface";

import createGames from "../../../shared/services/games/createGame";
import CustomPopup from "../../../UI/Modal";
import { useState } from "react";
import updateGames from "../../../shared/services/games/updateGame";
import deleteGames from "../../../shared/services/games/deleteGame";

const FormAdm = (props: IProps) => {
  const { id } = props;
  const { register, handleSubmit } = useForm<InputUser>();
  const [dataInputs, setDataInputs] = useState<any>({});

  const { create } = createGames();
  const { update } = updateGames();
  const { remove } = deleteGames();

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

  const convertToNumber = (value: any) => {
    return Number(value);
  };

  const createOrUpdateGame = async () => {
    const { type, color, description, range, price, max_number } = dataInputs;
    if (type && color && description && range && price && max_number) {
      try {
        if (!id) {
          await toast.promise(
            create({
              type,
              color,
              description,
              range,
              price,
              max_number,
            }),
            {
              pending: "Carregando...",
              success: "Jogo cadastrado com sucesso!",
            }
          );
        } else {
          await toast.promise(
            update(
              {
                type,
                color,
                description,
                range,
                price,
                max_number,
              },
              id
            ),
            {
              pending: "Carregando...",
              success: "Jogo atualizado com sucesso!",
            }
          );
        }

        window.location.reload();
      } catch (err) {
        notifyError("Erro ao cadastrar o jogo.");
      }
    }
  };

  const removeGame = async () => {
    try {
      await toast.promise(remove(id), {
        pending: "Carregando...",
        success: "Jogo deletado com sucesso!",
      });

      window.location.reload();
    } catch (err) {
      notifyError("Erro ao deletar o jogo.");
    }
  };

  async function validateInputs(inputData: InputUser) {
    const { color, type, description, range, price, max_number } = inputData;
    try {
      const typeSchema = Yup.object().shape({
        type: Yup.string().required("Por favor, informe o nome do jogo."),
      });

      const descriptionSchema = Yup.object().shape({
        description: Yup.string().required("Por favor, informe a descrição."),
      });

      const colorSchema = Yup.object().shape({
        color: Yup.string().required("Por favor, informe uma cor."),
      });

      const rangeSchema = Yup.object().shape({
        range: Yup.number().required(
          "Por favor, informe um valor númerico para o total de números."
        ),
      });

      const priceSchema = Yup.object().shape({
        price: Yup.string().required(
          `Por favor, informe um valor númerico para o preço (utilize "." ao invés de ",").`
        ),
      });

      const maxNumberSchema = Yup.object().shape({
        max_number: Yup.number().required(
          "Por favor, informe um valor númerico para o máximo de números que podem serem escolhidos."
        ),
      });

      await typeSchema.validate({ type: type });
      await descriptionSchema.validate({ description: description });
      await colorSchema.validate({ color: color });
      await rangeSchema.validate({ range: range });
      await priceSchema.validate({ price: price });
      await maxNumberSchema.validate({ max_number: max_number });

      const inputs = {
        color,
        type,
        description,
        range: Math.round(convertToNumber(range)),
        price: Number(
          price.toString().split(/R\$\s/gi).join("").replace(",", ".")
        ),
        max_number: Math.round(convertToNumber(max_number)),
      };
      setDataInputs({ ...inputs });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        notifyError(err.message);
      }
    }
  }
  return (
    <>
      <BoxForm onSubmit={handleSubmit(validateInputs)}>
        <TitleForm>{!id ? "Create Game" : "Update or Delete a Game"}</TitleForm>
        <Form>
          <BoxInput>
            <Label htmlFor="type">Type</Label>
            <InputConteiner>
              <Input
                id="type"
                type="text"
                placeholder="Game name"
                {...register("type")}
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>
          <BoxInput>
            <Label htmlFor="range">Range</Label>
            <InputConteiner>
              <Input
                id="range"
                type="text"
                placeholder="Total numbers"
                {...register("range")}
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>

          <BoxInput>
            <Label htmlFor="price">Price</Label>
            <InputConteiner>
              <Input
                id="price"
                type="text"
                placeholder="ex: 2.00"
                {...register("price")}
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>

          <BoxInput>
            <Label htmlFor="max_number">Max numbers </Label>
            <InputConteiner>
              <Input
                id="max_number"
                type="text"
                placeholder="maximum numbers"
                {...register("max_number")}
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>

          <BoxInput>
            <Label htmlFor="color">Color</Label>
            <InputConteiner>
              <Input
                id="color"
                type="text"
                placeholder="ex: #000000"
                {...register("color")}
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>

          <BoxInput>
            <Label htmlFor="description">Description</Label>
            <InputConteiner height="100px">
              <IputDescription
                id="description"
                placeholder="Description"
                {...register("description")}
                autoComplete="off"
              />
            </InputConteiner>
          </BoxInput>

          <BoxButtons>
            {id && (
              <CustomPopup
                title="Atualizar Jogo"
                content={"Deseja realmente atualizar este jogo?"}
                execute={createOrUpdateGame}
                open={<Button>Update Game</Button>}
              />
            )}
            {id && (
              <CustomPopup
                title="Deletar Jogo"
                content={"Deseja realmente deletar este jogo?"}
                execute={removeGame}
                open={<Button type="button">Delete Game</Button>}
              />
            )}

            {!id && (
              <CustomPopup
                title="Criar Jogo"
                content={"Deseja realmente criar este jogo?"}
                execute={createOrUpdateGame}
                open={<Button>Create Game</Button>}
              />
            )}
          </BoxButtons>
        </Form>
      </BoxForm>
    </>
  );
};

export default FormAdm;
