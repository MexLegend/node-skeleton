"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const updateSchema = joi_1.default
    .object({
    id: joi_1.default.string().required().messages({
        'string.base': 'The id must be a string',
        'any.required': 'The id is required'
    }),
    name: joi_1.default.string().required().messages({
        'string.base': 'The name must be a string',
        'any.required': 'The name field is required'
    }),
    email: joi_1.default.string().required().email().messages({
        'string.base': 'The email must be a string',
        'any.required': 'The email field is required',
        'string.email': 'The email field must be a valid email address'
    })
})
    .messages({
    'any.required': 'Id, name and email are required'
})
    .required();
exports.default = updateSchema;
