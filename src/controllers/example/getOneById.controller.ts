import { Request, Response, NextFunction } from 'express';
import { getOneById } from '@services/example/index.service';

import { validateHelper } from '@helpers/validate.helper';
import schema from '@validations/example/getOneById.schema';

import { IGetOneExample } from '@interfaces/example.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate schema
        const { id } = req.params;
        await validateHelper<IGetOneExample>(schema, { id });

        // Return response
        res.send({ message: 'Found example', data: {} });
    } catch (error) {
        next(error);
    }
};

export default main;
