
import userModel from '@database/models/user.model';
import { internalServerError } from '@helpers/error.helper';
import { IUserResponse, UserErrorType } from '@interfaces/user.interface';

const main = async (): Promise<IUserResponse[]> => {
	try {

		// Find users
		const users = await userModel.find();

		// Return response
		return users as IUserResponse[];
	} catch (error) {
		return internalServerError<UserErrorType>((<Error>error).message, 'GET_USERS_ERROR');
	}
};

export default main;
