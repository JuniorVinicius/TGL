import { BoxBet, Barr, Content, ConteinerText, Register, TagGame } from "./BetsSave";

const Bet = () => {
  return (
    <>
      <BoxBet>
        <Barr />
        <Content>
          <ConteinerText className="first-conteiner">
            01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15
          </ConteinerText>

          <ConteinerText>
            <Register>30/11/2020</Register> - <Register>(R$ 2,50)</Register>
          </ConteinerText>

          <ConteinerText>
            <TagGame>Lotofácil</TagGame>
          </ConteinerText>
        </Content>
      </BoxBet>
    </>
  );
};

export default Bet;
