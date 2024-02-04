
import { badRequestError } from '@helpers/error.helper';
import { IExample, ExampleErrorType } from '@interfaces/example.interface';

const main = async ({ email, name, password }: IExample) => {
	try {

		// return response
		return;
	} catch (error) {
		badRequestError<ExampleErrorType>((<Error>error).message, 'CREATE_EXAMPLE_ERROR');
	}
};

export default main;
