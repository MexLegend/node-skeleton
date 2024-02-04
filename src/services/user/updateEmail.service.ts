import userModel from '@database/models/user.model';
import { internalServerError } from '@helpers/error.helper';
import { IUpdateUserEmail, IUserResponse, UserErrorType } from '@interfaces/user.interface';

const main = async ({ id, email }: IUpdateUserEmail) => {
	try {

		// Update user
		const updatedUser = await userModel.findByIdAndUpdate(
			id,
			{
				email
			},
			{
				new: true
			}
		);

		// Return response
		return updatedUser as IUserResponse;
	} catch (error) {
		internalServerError<UserErrorType>((<Error>error).message, 'UPDATE_USER_EMAIL_ERROR');
	}
};

export default main;
