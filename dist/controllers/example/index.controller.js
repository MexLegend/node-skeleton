"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.update = exports.create = exports.getOneById = exports.getAll = void 0;
const getAll_controller_1 = __importDefault(require("./getAll.controller"));
exports.getAll = getAll_controller_1.default;
const getOneById_controller_1 = __importDefault(require("./getOneById.controller"));
exports.getOneById = getOneById_controller_1.default;
const create_controller_1 = __importDefault(require("./create.controller"));
exports.create = create_controller_1.default;
const update_controller_1 = __importDefault(require("./update.controller"));
exports.update = update_controller_1.default;
const deleteOne_controller_1 = __importDefault(require("./deleteOne.controller"));
exports.deleteOne = deleteOne_controller_1.default;
