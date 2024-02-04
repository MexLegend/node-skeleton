
import { internalServerError } from '@helpers/error.helper';
import { IExample, ExampleErrorType } from '@interfaces/example.interface';

const main = async (id: string) => {
	try {

		// return response
		return;
	} catch (error) {
		internalServerError<ExampleErrorType>((<Error>error).message, 'EXAMPLE_NOT_FOUND');
	}
};

export default main;
