import { IError } from "@interfaces/error.interface";
import { NextFunction, Request, Response } from "express";

const errorController = (err: IError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.httpStatus || 500).send(err)
}

export { errorController };
