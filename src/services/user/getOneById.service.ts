
import userModel from '@database/models/user.model';
import { internalServerError, notFoundError } from '@helpers/error.helper';
import { IUserResponse, UserErrorType } from '@interfaces/user.interface';

const main = async (id: string): Promise<IUserResponse> => {
	try {

		// Find user
		const user = await userModel.findById(id);

		if (!user) return notFoundError<UserErrorType>('User not found', 'USER_NOT_FOUND');

		// Return response
		return user as IUserResponse;
	} catch (error) {
		return internalServerError<UserErrorType>((<Error>error).message, 'USER_NOT_FOUND');
	}
};

export default main;
