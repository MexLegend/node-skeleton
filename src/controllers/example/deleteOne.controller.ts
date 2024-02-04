import { Request, Response, NextFunction } from 'express';
import { deleteOne } from '@services/example/index.service';

import { validateHelper } from '@helpers/validate.helper';
import schema from '@validations/shared/getOneById.schema';

import { IIdentifier } from '@interfaces/shared.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // Validate schema
        const { id } = req.params;
        await validateHelper<IIdentifier>(schema, { id });

        await deleteOne(id);

        // Return response
        res.send('Example deleted successfully');
    } catch (error) {
        next(error);
    }
};

export default main;
