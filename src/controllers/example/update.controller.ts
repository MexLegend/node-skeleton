import { Request, Response, NextFunction } from 'express';
import { getOneById } from '@services/example/index.service';

import { validateHelper } from '@helpers/validate.helper';
import schema from '@validations/shared/getOneById.schema';

import { IUpdateExample } from '@interfaces/example.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate schema
        const { id } = req.params;
        const example: IUpdateExample = { ...req.body, id };
        await validateHelper<IUpdateExample>(schema, example);

        const updatedExample = await update(example);
        
        // Return response
        res.send( { data: updatedExample } );
    } catch (error) {
        next(error);
    }
};

export default main;
