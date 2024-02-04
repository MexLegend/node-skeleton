import joi from 'joi';

const getOneByIdSchema = joi
	.object({
		id: joi.number().required().messages({
			'string.base': 'The id must be a string',
			'any.required': 'The id is required'
		})
	})
	.messages({
		'any.required': 'The Id is required'
	})
	.required();

export default getOneByIdSchema;
