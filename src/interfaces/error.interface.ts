export type HttpErrorType =
    | 'CONFLICT'
    | 'NOT_FOUND'
    | 'UNAUTHORIZED'
    | 'FORBIDDEN'
    | 'INTERNAL_ERROR'
    | 'BAD_REQUEST_ERROR';

export interface IError<T = HttpErrorType> {
    readonly httpError: T;
    readonly httpStatus: number;
    readonly message: string;
}
