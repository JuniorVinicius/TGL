import { IGameType } from "./interface";
import {
  BoxBet,
  Barr,
  Content,
  ConteinerText,
  Register,
  TagGame,
} from "./style";

const Bet = (props: IGameType) => {
  const { numbers, date, amount, typeGame, color } = props;

  return (
    <>
      <BoxBet>
        <Barr color={color} />
        <Content>
          <ConteinerText className="first-conteiner">{numbers}</ConteinerText>

          <ConteinerText>
            <Register>{date}</Register> - <Register>({amount})</Register>
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
