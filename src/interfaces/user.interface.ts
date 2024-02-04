import { CrudOperationError, IIdentifier, ITimeStamps } from "./shared.interface";

export type UserErrorType = CrudOperationError<'USER'> | "UPDATE_USER_EMAIL_ERROR";

export interface IUser {
    name: string;
    age: number;
    email: string;
    password: string;
}

export interface IUpdateUser extends Omit<IUser, "password" | "email">, IIdentifier { }

export interface IUpdateUserEmail extends IIdentifier {
    email: string;
}

export interface IUserResponse extends IUser, IIdentifier, ITimeStamps { }
