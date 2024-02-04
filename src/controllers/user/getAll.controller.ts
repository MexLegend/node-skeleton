import { Request, Response, NextFunction } from 'express';
import { getAll } from '@services/user/index.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const users = await getAll();

        // Return response
        res.send({ data: users });
    } catch (error) {
        next(error);
    }
};

export default main;
