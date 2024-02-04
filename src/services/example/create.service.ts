
import { internalServerError } from '@helpers/error.helper';
import { IExample, EXAMPLE_ERROR_TYPE } from '@interfaces/example.interface';

const main = async ({ email, name, password }: IExample) => {
	try {

		// return response
		return;
	} catch (error) {
		internalServerError<EXAMPLE_ERROR_TYPE>((<Error>error).message, 'CREATE_EXAMPLE_ERROR');
	}
};

export default main;
