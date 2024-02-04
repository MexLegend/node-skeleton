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
const create_service_1 = __importDefault(require("@services/example/create.service"));
const validate_helper_1 = require("@helpers/validate.helper");
const create_schema_1 = __importDefault(require("@validations/example/create.schema"));
const main = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate schema
        yield (0, validate_helper_1.validateHelper)(create_schema_1.default, req.body);
        yield (0, create_service_1.default)(req.body);
        // Return response
        res.send('Example created successfully');
    }
    catch (error) {
        next(error);
    }
});
exports.default = main;
