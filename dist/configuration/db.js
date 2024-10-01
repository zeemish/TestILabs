"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = () => {
    const uri = process.env.MONGOOSE_URI;
    if (!uri) {
        throw new Error('MONGOOSE_URI is not defined in the environment variables.');
    }
    const mongoDb = mongoose_1.default.connect(uri)
        .then(() => console.log("Db connected successfully."))
        .catch((err) => console.log({ error: err.message }));
    return mongoDb;
};
exports.dbConnect = dbConnect;
