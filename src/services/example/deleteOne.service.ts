
import { internalServerError } from '@helpers/error.helper';
import { ExampleErrorType } from '@interfaces/example.interface';

const main = async (id: string) => {
	try {

		// return response
		return
	} catch (error) {
		internalServerError<ExampleErrorType>((<Error>error).message, 'DELETE_EXAMPLE_ERROR');
	}
};

export default main;
