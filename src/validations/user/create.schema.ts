import joi from 'joi';

const createSchema = joi
    .object({
        name: joi.string().required().messages({
            'string.base': 'The name must be a string',
            'any.required': 'The name field is required'
        }),
        age: joi.number().required().messages({
            'number.base': 'The age must be a number',
            'any.required': 'The age field is required'
        }),
        email: joi.string().required().email().messages({
            'string.base': 'The email must be a string',
            'any.required': 'The email field is required',
            'string.email': 'The email field must be a valid email address'
        }),
        password: joi.string().required().min(8).max(20).messages({
            'any.required': 'The password field is required',
            'string.min': 'The password must have at least {#limit} characters',
            'string.max': 'The password must not exceed {#limit} characters'
        })
    })
    .messages({
        'any.required': 'Name, Age, Email and Password are required'
    })
    .required();

export default createSchema;
