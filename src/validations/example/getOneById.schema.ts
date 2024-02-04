import joi from 'joi';

const getOneByIdSchema = joi
	.object({
		id: joi.number().required().messages({
			'string.base': 'The exampleId must be a string',
			'any.required': 'The exampleId is required'
		})
	})
	.messages({
		'any.required': 'Example Id is required'
	})
	.required();

export default getOneByIdSchema;
