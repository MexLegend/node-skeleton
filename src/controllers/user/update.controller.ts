import { Request, Response, NextFunction } from 'express';
import { update } from '@services/user/index.service';

import { validateHelper } from '@helpers/validate.helper';
import schema from '@validations/user/update.schema';

import { IUpdateUser } from '@interfaces/user.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate schema
        const { id } = req.params;
        const user: IUpdateUser = { ...req.body, id };
        await validateHelper<IUpdateUser>(schema, user);

        const updatedUser = await update(user);

        // Return response
        res.send({ data: updatedUser });
    } catch (error) {
        next(error);
    }
};

export default main;
