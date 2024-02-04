export type ErrorType =
    | 'CONFLICT'
    | 'NOT_FOUND'
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'INTERNAL_ERROR'
    | 'BAD_REQUEST_ERROR';

export interface IError<T = ErrorType> {
    readonly code: T;
    readonly httpStatus: number;
    readonly message: string;
}
