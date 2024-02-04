export type CrudOperationError<Model extends string> =
    `GET_${Model}S_ERROR` |
    `${Model}_NOT_FOUND` |
    `CREATE_${Model}_ERROR` |
    `UPDATE_${Model}_ERROR` |
    `DELETE_${Model}_ERROR`;

export interface IIdentifier {
    id: string;
}

export interface ITimeStamps {
    createdAt: Date;
    updatedAt: Date;
}
