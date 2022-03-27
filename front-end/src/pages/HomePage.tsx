import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Button } from "../UI/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import Header from "./../components/Header/Header";
import { MainConteiner } from "../UI/Conteiner/MainConteiner";
import {
  BoxFilters,
  Filters,
  ConteinerButton,
  Card,
} from "./../UI/Conteiner/BoxFilters";
import { TextContent } from "./../components/HomePageText/index";
import { Filter } from "./../components/Filter/index";
import Bet from "../components/Bets";
import { useEffect, useState } from "react";
import bets from "./../shared/services/bet/listbets/index";
import games from "../shared/services/games";
import { toast } from "react-toastify";

const HomePage = () => {
  const [dataBets, setDataBets] = useState<any[]>();
  const [dataBetsTypes, setDataBetsTypes] = useState<any[]>();
  const [filter, setFilter] = useState<string>("");
  const [filterBackground, setFilterBackground] = useState<string>("");
  const navigate = useNavigate();
  const { listBets } = bets();
  const { listGames } = games();

  const allBets = async (query: string) => {
    try {
      const responseBets = await toast.promise(listBets(query), {
        pending: "Carregando...",
        error: "Erro ao carregar os jogos.",
      });
      const responseGame = await listGames();

      setDataBets(responseBets?.data);
      setDataBetsTypes(responseGame?.data.types);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allBets(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleFilters = (type: string, color: string) => {
    setFilter(type);
    setFilterBackground(color);
    if(filterBackground === color){
      setFilter("")
      setFilterBackground("")
    }
  };

  const typeGames = dataBetsTypes?.map((typeBet) => {
    return (
      <Filter
        onClick={() => handleFilters(typeBet.type, typeBet.color)}
        key={Math.random()}
        color={typeBet.color}
        background={filterBackground}
      >
        {typeBet.type}
      </Filter>
    );
  });

  const listChosenGames = dataBets?.map((game) => {
    const date = game.created_at
      .replace(/-/gi, "/")
      .match(/\d{4}\/\d{2}\/\d{2}/gi)[0]
      .split("/")
      .reverse()
      .join("/");

    const price: string = `R$ ${Number(game.price)
      .toFixed(2)
      ?.toString()
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

    let actualColor: string = "";
    dataBetsTypes?.forEach((element) => {
      if (element.id === game.type.id) {
        actualColor = element.color;
      }
    });

    return (
      <Bet
        key={Math.random()}
        date={date}
        typeGame={game.type.type}
        numbers={game.choosen_numbers}
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
            <TextContent fontBold={true}>
              RECENT GAMES
            </TextContent>

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

        {listChosenGames}
      </MainConteiner>

      <Footer />
    </>
  );
};

export default HomePage;