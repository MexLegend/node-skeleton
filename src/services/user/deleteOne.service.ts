import userModel from '@database/models/user.model';
import { internalServerError } from '@helpers/error.helper';
import { UserErrorType } from '@interfaces/user.interface';

const main = async (id: string): Promise<void> => {
	try {

		// Delete user
		await userModel.findByIdAndDelete(id);

	} catch (error) {
		return internalServerError<UserErrorType>((<Error>error).message, 'DELETE_USER_ERROR');
	}
};

export default main;
