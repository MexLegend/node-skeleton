import { IIdentifier, ITimeStamps } from "./shared.interface";

export type ExampleErrorType = ErrorType<'EXAMPLE'>;

export interface IExample {
    name: string;
    email: string;
    password: string;
}

export interface IUpdateExample extends IExample, IIdentifier { }

export interface IExampleResponse extends IExample, IIdentifier, ITimeStamps { }
