export type Error_Type =
    | 'CONFLICT'
    | 'NOT_FOUND'
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'INTERNAL_ERROR'
    | 'BAD_REQUEST_ERROR';

export interface IError<T = Error_Type> {
    readonly code: T;
    readonly httpStatus: number;
    readonly message: string;
}
