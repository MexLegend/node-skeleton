import userModel from '@database/models/user.model';
import { internalServerError } from '@helpers/error.helper';
import { IUpdateUser, IUserResponse, UserErrorType } from '@interfaces/user.interface';

const main = async ({ id, age, name }: IUpdateUser) => {
	try {

		// Update user
		const updatedUser = await userModel.findByIdAndUpdate(
			id,
			{
				age,
				name
			},
			{
				new: true
			}
		);

		// Return response
		return updatedUser as IUserResponse;
	} catch (error) {
		internalServerError<UserErrorType>((<Error>error).message, 'UPDATE_USER_ERROR');
	}
};

export default main;
