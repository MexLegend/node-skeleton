import { NextFunction, Request, Response } from 'express';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {
        next();
    } catch (error) {
        next(error);
    }
};

export default main;
