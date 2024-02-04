"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.update = exports.create = exports.getOneById = exports.getAll = void 0;
const getAll_service_1 = __importDefault(require("./getAll.service"));
exports.getAll = getAll_service_1.default;
const getOneById_service_1 = __importDefault(require("./getOneById.service"));
exports.getOneById = getOneById_service_1.default;
const create_service_1 = __importDefault(require("./create.service"));
exports.create = create_service_1.default;
const update_service_1 = __importDefault(require("./update.service"));
exports.update = update_service_1.default;
const deleteOne_service_1 = __importDefault(require("./deleteOne.service"));
exports.deleteOne = deleteOne_service_1.default;
