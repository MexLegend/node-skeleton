import { internalServerError } from '@helpers/error.helper';
import { IUpdateExample, EXAMPLE_ERROR_TYPE } from '@interfaces/example.interface';

const main = async ({ id, email, name, password }: IUpdateExample) => {
	try {
		// connect to the db


		// return response
		return;
	} catch (error) {
		internalServerError<EXAMPLE_ERROR_TYPE>((<Error>error).message, 'UPDATE_EXAMPLE_ERROR');
	}
};

export default main;
