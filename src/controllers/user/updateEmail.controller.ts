import { Request, Response, NextFunction } from 'express';
import { updateEmail } from '@services/user/index.service';

import { validateHelper } from '@helpers/validate.helper';
import schema from '@validations/user/updateEmail.schema';

import { IUpdateUserEmail } from '@interfaces/user.interface';

const main = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate schema
        const { id } = req.params;
        const user: IUpdateUserEmail = { ...req.body, id };
        await validateHelper<IUpdateUserEmail>(schema, user);

        const updatedUser = await updateEmail(user);

        // Return response
        res.send({ data: updatedUser });
    } catch (error) {
        next(error);
    }
};

export default main;
