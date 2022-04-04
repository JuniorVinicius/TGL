import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";

import {
  Header,
  Footer,
  Bet,
  TextContent,
  EmptyBox,
  Filter,
} from "../components";

import {
  BoxFilters,
  Filters,
  ConteinerButton,
  Card,
  Button,
  MainConteiner,
} from "./../UI";

import { games, bets } from "../shared/services";
import { convertDates, convertValues } from "../shared/helpers";

const HomePage = () => {
  const [dataBets, setDataBets] = useState<any[]>([]);
  const [dataBetsTypes, setDataBetsTypes] = useState<any[]>();
  const [filter, setFilter] = useState<string[]>([]);
  const [filterBackground, setFilterBackground] = useState<string[]>([]);
  const navigate = useNavigate();
  const { listBets } = bets();
  const { listGames } = games();

  const allBets = async (query?: string) => {
    try {
      const responseBets = await toast.promise(listBets(query), {
        pending: "Carregando...",
        error: "Erro ao carregar os jogos.",
      });
      const responseGame = await listGames();

      setDataBets(responseBets?.data.reverse());
      setDataBetsTypes(responseGame?.data.types);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(filter.length <= 0){
      allBets("");
    }else{
      allBets(filter.join("&type%5B%5D="));
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // useEffect(() => {
  //   const filterBets = dataBets.filter((bet) => {
  //     if (filter.length === 0) {
  //       return bet;
  //     }
  //     return filter.every((item) => bet.type.includes(item));
  //   });
  //   setDataBets(filterBets);
  //   console.log(filterBets);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])

  // useEffect(() => {
  //   console.log(filter);
  //   console.log(filterBackground);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filter]);

  const handleFilters = (type: string, color: string) => {
    if (!filter.includes(type)) {
      setFilter([...filter, type]);
    } else {
      const filterBets = filter.filter((item) => item !== type);
      setFilter([...filterBets]);
    }

    if (!filterBackground.includes(color)) {
      setFilterBackground([...filterBackground, color]);
    } else {
      const filterColors = filterBackground.filter((item) => item !== color);
      setFilterBackground([...filterColors]);
    }

    // //setFilterBackground(color);

    // if (filterBackground === color) {
    //   setFilter([]);
    //   //setFilterBackground("");
    // }
  };

  const typeGames = dataBetsTypes?.map((typeBet) => {
    return (
      <Filter
        onClick={() => handleFilters(typeBet.type, typeBet.color)}
        key={Math.random()}
        color={typeBet.color}
        background={filterBackground.find(element => element === typeBet.color)}
      >
        {typeBet.type}
      </Filter>
    );
  });

  const listChosenGames = dataBets?.map((game) => {
    const date = convertDates(game.created_at);

    const price: string = convertValues(game.price).toString();

    let actualColor: string = "";
    dataBetsTypes?.forEach((element) => {
      if (element.id === game.type.id) {
        actualColor = element.color;
      }
    });

    const numbers: string[] = game.choosen_numbers
      .split(",")
      .map((number: string) => {
        return number.padStart(2, "0");
      });

    return (
      <Bet
        key={Math.random()}
        date={date}
        typeGame={game.type.type}
        numbers={numbers.join(", ")}
        amount={price}
        color={actualColor}
      />
    );
  });

  const handleClickNewBet = () => {
    navigate("/newbet");
  };
  return (
    <>
      <Header homeButton={false} />

      <MainConteiner>
        <BoxFilters>
          <Filters>
            <TextContent fontBold={true}>RECENT GAMES</TextContent>

            <Card className="filters">
              <TextContent fontSize={17} marginRight={15}>
                Filters
              </TextContent>

              {typeGames}
            </Card>
          </Filters>

          <ConteinerButton>
            <Button
              color="var(--main-green)"
              fontSize={24}
              onClick={handleClickNewBet}
            >
              New Bet
              <BsArrowRight style={{ marginLeft: "10px" }} />
            </Button>
          </ConteinerButton>
        </BoxFilters>

        <Card className="filters-mobile">
          <Card>
            <TextContent fontSize={17} marginRight={15}>
              Filters
            </TextContent>
          </Card>
          {typeGames}
        </Card>

        {!!listChosenGames && listChosenGames?.length > 0 ? (
          listChosenGames
        ) : (
          <EmptyBox>
            <TextContent fontSize={50} fontBold={true}>
              Empty bets
            </TextContent>
          </EmptyBox>
        )}
      </MainConteiner>

      <Footer />
    </>
  );
};

export default HomePage;
