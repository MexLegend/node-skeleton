import { Request, Response, NextFunction } from 'express';
import { create } from '@services/user/index.service';

import { validateHelper } from '@helpers/validate.helper';
import schema from '@validations/user/create.schema';

import { IUser } from '@interfaces/user.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate schema
        await validateHelper<IUser>(schema, req.body);

        const user = await create(req.body);

        // Return response
        res.send({ data: user });
    } catch (error) {
        next(error);
    }
};

export default main;
