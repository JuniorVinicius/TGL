import { useState, useEffect } from "react";
import { games } from "../../shared/services";
import { Filter } from "../Filter";
import { useDispatch } from "react-redux";
import { showUpdateActions } from "../../store/showUpdate-slice";
import {
  BoxAdmPanel,
  BoxDescription,
  Conteiner,
  Description,
  Title,
} from "./style";

import FormAdm from "./../Form/FormAdm";
import { IProps } from "./interfaces";

const AdmPanel = (props: IProps) => {
  const { show } = props;
  const [dataBetsTypes, setDataBetsTypes] = useState<any[]>([]);
  const [filterBackground, setFilterBackground] = useState<string>("");
  const [dataBet, setDataBet] = useState<any>({});
  const [showItems, setShowItems] = useState<any>(show);
  const { listGames } = games();

  const dispatch = useDispatch();
  useEffect(() => {
    allBets();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!show) {
      setFilterBackground("");
      setDataBet({});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const allBets = async () => {
    try {
      const responseGame = await listGames();
      setDataBetsTypes(responseGame?.data.types);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (typeBet: any) => {
    setFilterBackground(typeBet.color);
    setDataBet({
      color: typeBet.color,
      type: typeBet.type,
      description: typeBet.description,
      price: typeBet.price,
      range: typeBet.range,
      max_number: typeBet.max_number,
      id: typeBet.id,
    });

    if (filterBackground === typeBet.color) {
      setFilterBackground("");
      setDataBet({});
    }

    setShowItems(true);
    dispatch(showUpdateActions.toggle());
  };

  const typeGames = dataBetsTypes?.map((typeBet) => {
    return (
      <Filter
        onClick={() => handleChange(typeBet)}
        key={Math.random()}
        color={typeBet.color}
        background={filterBackground}
      >
        {typeBet.type}
      </Filter>
    );
  });

  const createGame = (color: string) => {
    setFilterBackground(color);
    setDataBet({});

    if (filterBackground === color) {
      setFilterBackground("");
    }

    dispatch(showUpdateActions.toggle());
  };

  return (
    <>
      <BoxAdmPanel>
        {typeGames}
        <Filter
          color="var(--main-green)"
          background={filterBackground}
          onClick={() => createGame("var(--main-green)")}
        >
          + Add Game
        </Filter>
      </BoxAdmPanel>

      {showItems && (
        <BoxDescription>
          {dataBet?.description && (
            <Conteiner>
              <Title>Description</Title>
              <Description>{dataBet?.description}</Description>
            </Conteiner>
          )}
        </BoxDescription>
      )}
      {filterBackground && showItems && (
        <FormAdm
          id={dataBet.id}
          type={dataBet.type}
          description={dataBet.description}
          color={dataBet.color}
          range={dataBet.range}
          max_number={dataBet.max_number}
          price={dataBet.price}
        />
      )}
    </>
  );
};
export default AdmPanel;
