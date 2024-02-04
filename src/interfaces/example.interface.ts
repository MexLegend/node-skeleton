import { IIdentifier, ITimeStamps } from "./shared.interface";

export type EXAMPLE_ERROR_TYPE = 'CREATE_EXAMPLE_ERROR' | 'UPDATE_EXAMPLE_ERROR' | 'GET_EXAMPLES_ERROR' | 'EXAMPLE_NOT_FOUND' | 'DELETE_EXAMPLE_ERROR';

export interface IExample {
    name: string;
    email: string;
    password: string;
}

export interface IUpdateExample extends IExample, IIdentifier { }

export interface IExampleResponse extends IExample, IIdentifier, ITimeStamps { }
