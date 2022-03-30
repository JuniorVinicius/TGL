import { IBodyUser, ICreateUserResponse } from "../../interfaces/CreateUserInterface";



export interface IUserCreate {
    newUser: ({ name, email, password }: IBodyUser) => Promise<ICreateUserResponse>;
}