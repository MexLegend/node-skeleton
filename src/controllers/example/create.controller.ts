import { Request, Response, NextFunction } from 'express';
import create from '@services/example/create.service';

import { validateHelper } from '@helpers/validate.helper';
import schema from '@validations/example/create.schema';

import { IExample } from '@interfaces/example.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate schema
        await validateHelper<IExample>(schema, req.body);

        await create(req.body);

        // Return response
        res.send( { data: {} } );
    } catch (error) {
        next(error);
    }
};

export default main;
