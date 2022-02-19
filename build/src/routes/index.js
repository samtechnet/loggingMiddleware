"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./apis/logger"));
var logger2_1 = __importDefault(require("./apis/logger2"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.status(200).send(' This is Middleware routes');
});
routes.use('/logger', logger_1.default);
routes.use('/logger2', logger2_1.default);
exports.default = routes;
