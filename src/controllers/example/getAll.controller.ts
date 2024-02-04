import { Request, Response, NextFunction } from 'express';
import { getAll } from '@services/example/index.service';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await getAll();
        
        // Return response
        res.send({ data });
    } catch (error) {
        next(error);
    }
};

export default main;
