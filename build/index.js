"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./src/routes/index"));
var app = (0, express_1.default)();
var PORT = 5001;
app.use('/apis', index_1.default);
var logger = function (req, res, next) {
    console.log('i am middleware');
    next();
};
app.get('/', logger, function (req, res) {
    res.send(' This is from base server');
});
app.listen(PORT, function () { return console.log("app started on port ".concat(PORT)); });
exports.default = app;
