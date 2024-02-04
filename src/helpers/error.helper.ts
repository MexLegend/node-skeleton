import { HttpErrorType, IError } from "@interfaces/error.interface";

export class CustomError<T> extends Error implements IError<T> {
    httpError: T;
    httpStatus: number;

    constructor(message: string, httpError: T, httpStatus: number) {
        super();
        this.message = message;
        this.httpError = httpError;
        this.httpStatus = httpStatus;
    }
}

const conflictError = <T = HttpErrorType>(msg: string, httpError?: T) => {
    const err = new CustomError(msg, httpError || 'CONFLICT', 409);
    throw err;
};

const notFoundError = <T = HttpErrorType>(msg: string, httpError?: T) => {
    const err = new CustomError(msg, httpError || 'NOT_FOUND', 404);
    throw err;
};

const notAuthorizedError = <T = HttpErrorType>(msg: string, httpError?: T) => {
    const err = new CustomError(msg, httpError || 'UNAUTHORIZED', 401);
    throw err;
};

const forbiddenError = <T = HttpErrorType>(msg: string, httpError?: T) => {
    const err = new CustomError(msg, httpError || 'FORBIDDEN', 403);
    throw err;
};

const internalServerError = <T = HttpErrorType>(msg: string, httpError?: T) => {
    const err = new CustomError(msg, httpError || 'INTERNAL_ERROR', 500);
    throw err;
};

const badRequestError = <T = HttpErrorType>(msg: string, httpError?: T) => {
    const err = new CustomError(msg, httpError || 'BAD_REQUEST_ERROR', 400);
    throw err;
};

export {
    badRequestError, conflictError, forbiddenError,
    internalServerError, notAuthorizedError, notFoundError
};
