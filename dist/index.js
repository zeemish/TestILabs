"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_1 = require("./configuration/db");
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const config_1 = require("./configuration/config");
const index_1 = __importDefault(require("./routes/index"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const envs = (0, config_1.configs)(); // Access config object
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// app.use(GlobalErrorHandler);
// app.use(HandleNotFound);
app.use("/api/v1", index_1.default);
app.get("/", (req, res) => {
    res.send(`<h1> INFROLABS | APIs</h1>`);
});
app.get("/success?:id", (req, res) => {
    res.send(`<h1> Success </h1>`);
});
app.get("/cancel", (req, res) => {
    res.send(`<h1> Success </h1>`);
});
(0, db_1.dbConnect)();
app.listen(envs === null || envs === void 0 ? void 0 : envs.port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
