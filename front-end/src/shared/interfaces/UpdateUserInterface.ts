export interface IBodyUpdate {
  email: string;
  name: string;
}

export interface IUpdateResponse {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  token: null;
  token_created_at: null;
  created_at: Date;
  updated_at: Date;
}
