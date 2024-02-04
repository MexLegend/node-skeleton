"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_helper_1 = require("@helpers/validate.helper");
const getOneById_schema_1 = __importDefault(require("@validations/example/getOneById.schema"));
const main = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate schema
        const { id } = req.params;
        const example = Object.assign(Object.assign({}, req.body), { id });
        yield (0, validate_helper_1.validateHelper)(getOneById_schema_1.default, example);
        // Return response
        res.send('Example updated successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.default = main;
