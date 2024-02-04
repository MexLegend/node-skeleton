"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("@controllers/example/index.controller");
const example_middleware_1 = __importDefault(require("@middlewares/example.middleware"));
const router = (0, express_1.Router)();
router.get('/', index_controller_1.getAll);
router.get('/:id', index_controller_1.getOneById);
router.post('/create', index_controller_1.create);
router.put('/:id', index_controller_1.update);
router.delete('/:id', example_middleware_1.default, index_controller_1.deleteOne);
exports.default = router;
