interface Type {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
}

interface IDataUser {
  min_cart_value: number;
  types: Type[];
}
export interface ICartGames {
  data: IDataUser;
}
