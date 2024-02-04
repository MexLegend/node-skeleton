import joi from 'joi';

const updateSchema = joi
	.object({
		id: joi.string().required().messages({
			'string.base': 'The id must be a string',
			'any.required': 'The id is required'
		}),
		name: joi.string().required().messages({
			'string.base': 'The name must be a string',
			'any.required': 'The name field is required'
		}),
		age: joi.number().required().messages({
			'number.base': 'The age must be a number',
			'any.required': 'The age field is required'
		})
	})
	.messages({
		'any.required': 'Id, Name and Age are required'
	})
	.required();

export default updateSchema;
