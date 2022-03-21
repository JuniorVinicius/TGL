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

const HomePage = () => {
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

              <Filter color="#7F3992">Lotofácil</Filter>
              <Filter color="#01AC66">Mega-Sena</Filter>
              <Filter color="#F79C31">Lotomania</Filter>
            </Card>
          </Filters>

          <ConteinerButton>
            <Button color="var(--main-green)" fontSize={24}>
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

          <Filter color="#7F3992">Lotofácil</Filter>
          <Filter color="#01AC66">Mega-Sena</Filter>
          <Filter color="#F79C31">Lotomania</Filter>
        </Card>

        <Bet typeGame="Lotofácil" color="#7F3992" />
        <Bet typeGame="Mega-Sena" color="#01AC66" />
        <Bet typeGame="Lotomania" color="#F79C31" />

      </MainConteiner>

      <Footer />
    </>
  );
};

export default HomePage;
