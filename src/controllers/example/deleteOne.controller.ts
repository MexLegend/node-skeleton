import { Request, Response, NextFunction } from 'express';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { id } = req.params;

        // Return response
        res.send('Example deleted successfully');
    } catch (error) {
        next(error);
    }
};

export default main;
