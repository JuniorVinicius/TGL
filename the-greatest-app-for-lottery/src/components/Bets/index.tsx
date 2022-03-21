import {
  BoxBet,
  Barr,
  Content,
  ConteinerText,
  Register,
  TagGame,
} from "./BetsSave";

type GameType = {
  numbers?: string;
  date?: string;
  amount?: string;
  typeGame?: string;
  color?: string;
};

const Bet = (props: GameType) => {
  const { numbers, date, amount, typeGame, color } = props;

  return (
    <>
      <BoxBet>
        <Barr color={color}/>
        <Content>
          <ConteinerText className="first-conteiner">
            01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15
          </ConteinerText>

          <ConteinerText>
            <Register>30/11/2020</Register> - <Register>(R$ 2,50)</Register>
          </ConteinerText>

          <ConteinerText>
            <TagGame color={color}>{typeGame}</TagGame>
          </ConteinerText>
        </Content>
      </BoxBet>
    </>
  );
};

export default Bet;
