"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorController = void 0;
const errorController = (err, req, res, next) => {
    res.status(err.httpStatus || 500).send(err);
};
exports.errorController = errorController;
