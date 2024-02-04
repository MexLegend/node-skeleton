"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const createSchema = joi_1.default
    .object({
    name: joi_1.default.string().required().messages({
        'string.base': 'The name must be a string',
        'any.required': 'The name field is required'
    }),
    email: joi_1.default.string().required().email().messages({
        'string.base': 'The email must be a string',
        'any.required': 'The email field is required',
        'string.email': 'The email field must be a valid email address'
    }),
    password: joi_1.default.string().required().min(8).max(20).messages({
        'any.required': 'The password field is required',
        'string.min': 'The password must have at least {#limit} characters',
        'string.max': 'The password must not exceed {#limit} characters'
    })
})
    .messages({
    'any.required': 'Name, Email and Password are required'
})
    .required();
exports.default = createSchema;
