"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middleware_1 = __importDefault(require("../middleware"));
var loggerRoute = express_1.default.Router();
loggerRoute.get('/', middleware_1.default, function (req, res) {
    res.status(200).send(' logging middleware was successful');
});
exports.default = loggerRoute;
