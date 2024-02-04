"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const getOneByIdSchema = joi_1.default
    .object({
    id: joi_1.default.number().required().messages({
        'string.base': 'The exampleId must be a string',
        'any.required': 'The exampleId is required'
    })
})
    .messages({
    'any.required': 'Example Id is required'
})
    .required();
exports.default = getOneByIdSchema;
