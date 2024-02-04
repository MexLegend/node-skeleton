import { internalServerError } from '@helpers/error.helper';
import { IUpdateExample, ExampleErrorType } from '@interfaces/example.interface';

const main = async ({ id, email, name, password }: IUpdateExample) => {
	try {
		// connect to the db


		// return response
		return;
	} catch (error) {
		internalServerError<ExampleErrorType>((<Error>error).message, 'UPDATE_EXAMPLE_ERROR');
	}
};

export default main;
