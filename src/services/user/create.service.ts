
import { hash } from 'bcrypt';

import userModel from '@database/models/user.model';
import { internalServerError } from '@helpers/error.helper';
import { IUser, IUserResponse, UserErrorType } from '@interfaces/user.interface';

const main = async ({ password, ...userData }: IUser): Promise<IUserResponse> => {
	try {

		// Create user
		const hashedPassword = await hash(password, 5);
		const user = await userModel.create({
			...userData,
			password: hashedPassword
		});

		// Return response
		return user as IUserResponse;
	} catch (error) {
		return internalServerError<UserErrorType>((<Error>error).message, 'CREATE_USER_ERROR');
	}
};

export default main;
