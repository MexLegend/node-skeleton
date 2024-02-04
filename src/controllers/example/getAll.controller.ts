import { Request, Response, NextFunction } from 'express';
import { getAll } from '@services/example/index.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {


        // Return response
        res.send({ message: 'Example list', data: [] });
    } catch (error) {
        next(error);
    }
};

export default main;
