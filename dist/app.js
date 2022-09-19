"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require('express')
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("I don't want to get anything from home page. ");
});
app.listen(3000);
