export type EXAMPLE_ERROR_TYPE = 'CREATE_EXAMPLE_ERROR' | 'UPDATE_EXAMPLE_ERROR' | 'GET_EXAMPLES_ERROR' | 'EXAMPLE_NOT_FOUND' | 'DELETE_EXAMPLE_ERROR';

export interface IGetOneExample {
    id: string;
}

export interface IExample {
    name: string;
    email: string;
    password: string;
}

export interface IUpdateExample extends IExample, IGetOneExample { }

export interface IExampleResponse extends IExample, IGetOneExample {
    createdAt: Date;
    updatedAt: Date;
}
