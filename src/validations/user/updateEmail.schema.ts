import joi from 'joi';

const updateSchema = joi
	.object({
		id: joi.string().required().messages({
			'string.base': 'The id must be a string',
			'any.required': 'The id is required'
		}),
		email: joi.string().required().email().messages({
			'string.base': 'The email must be a string',
			'any.required': 'The email field is required',
			'string.email': 'The email field must be a valid email address'
		})
	})
	.messages({
		'any.required': 'Id and Email are required'
	})
	.required();

export default updateSchema;
