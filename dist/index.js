"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("colors");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importStar(require("express"));
const index_router_1 = __importDefault(require("@routers/index.router"));
const index_controller_1 = require("@controllers/error/index.controller");
if ((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.includes('development'))
    dotenv_1.default.config();
const api = (0, express_1.default)();
api.use((0, express_1.json)());
api.use("/api", index_router_1.default);
api.use(index_controller_1.errorController);
const PORT = process.env.PORT || 3000;
api.listen(PORT, () => {
    console.log(`API running on ${'http://localhost:'.concat(PORT.toString()).green}`);
});
