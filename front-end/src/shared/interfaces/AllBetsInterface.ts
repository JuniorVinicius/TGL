

interface TypeClass {
  id: number;
  type: string;
}

interface UserDataBets{
  id: number;
  user_id: number;
  game_id: number;
  choosen_numbers: string;
  price: number;
  created_at: Date;
  type: TypeClass;
}

export interface IAllBet {
  data: UserDataBets[];
}
