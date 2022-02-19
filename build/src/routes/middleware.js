"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log('i am middleware');
    next();
};
var time = function (req, res, next) {
    console.log('i am the second middleware');
    next();
};
var middlewar = [time];
exports.default = logger;
middlewar;
time;
