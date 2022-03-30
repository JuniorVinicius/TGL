export interface IBodyUser {
  name: string;
  email: string;
  password: string;
}

interface Token {
  type: string;
  token: string;
  expires_at: Date;
}

interface User {
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  id: number;
}
export interface ICreateUserResponse {
  user: User;
  token: Token;
}
