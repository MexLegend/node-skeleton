
import { internalServerError } from '@helpers/error.helper';
import { EXAMPLE_ERROR_TYPE } from '@interfaces/example.interface';

const main = async (id: string) => {
	try {

		// return response
		return;
	} catch (error) {
		internalServerError<EXAMPLE_ERROR_TYPE>((<Error>error).message, 'GET_EXAMPLES_ERROR');
	}
};

export default main;
