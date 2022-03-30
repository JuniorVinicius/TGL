interface IGameType {
  game_id: number;
  numbers: number[];
}

export interface IBodyGame {
  games: IGameType[];
}

interface IBet {
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: Date;
  updated_at: Date;
  id: number;
}

export interface IBetResponse {
  bet: IBet[];
}
