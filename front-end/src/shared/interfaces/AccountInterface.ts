export interface AccountData {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: string;
  token_created_at: Date;
  created_at: Date;
  updated_at: Date;
  bets: any[];
  picture: string;
}

export interface IAccountResponse {
  data: AccountData;
}
