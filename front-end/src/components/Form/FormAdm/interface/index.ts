export interface InputUser {
  type: string;
  description: string;
  range: number;
  price: (string | number);
  max_number: number;
  color: string;
}

export interface IProps{
  id: number;
  type: string;
  description: string;
  range: number;
  price: (string | number);
  max_number: number;
  color: string;

}