"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = exports.notAuthorizedError = exports.internalServerError = exports.forbiddenError = exports.conflictError = exports.badRequestError = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, code, httpStatus) {
        super();
        this.message = message;
        this.code = code;
        this.httpStatus = httpStatus;
    }
}
exports.CustomError = CustomError;
const conflictError = (msg, code) => {
    const err = new CustomError(msg, code || 'CONFLICT', 409);
    throw err;
};
exports.conflictError = conflictError;
const notFoundError = (msg, code) => {
    const err = new CustomError(msg, code || 'NOT_FOUND', 404);
    throw err;
};
exports.notFoundError = notFoundError;
const notAuthorizedError = (msg, code) => {
    const err = new CustomError(msg, code || 'UNAUTHORIZED', 401);
    throw err;
};
exports.notAuthorizedError = notAuthorizedError;
const forbiddenError = (msg, code) => {
    const err = new CustomError(msg, code || 'FORBIDDEN', 403);
    throw err;
};
exports.forbiddenError = forbiddenError;
const internalServerError = (msg, code) => {
    const err = new CustomError(msg, code || 'INTERNAL_ERROR', 500);
    throw err;
};
exports.internalServerError = internalServerError;
const badRequestError = (msg, code) => {
    const err = new CustomError(msg, code || 'BAD_REQUEST_ERROR', 400);
    throw err;
};
exports.badRequestError = badRequestError;
