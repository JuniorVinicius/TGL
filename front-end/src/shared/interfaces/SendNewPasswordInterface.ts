export interface IBodyPassword {
  password: string;
}

export interface IResetPasswordResponse {
  id: number;
  email: string;
  is_admin: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
