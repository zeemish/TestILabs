"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Define registration schema
exports.registerSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format",
    }),
    password: joi_1.default.string().min(6).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters long",
    }),
    name: joi_1.default.string().required().messages({
        "string.empty": "Name is required",
    }),
    country: joi_1.default.string().required().messages({
        "string.empty": "Billing country is required.",
    }),
    describe: joi_1.default.string().required().messages({
        "string.empty": "Describe is required.",
    }),
});
// Define login schema
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format",
    }),
    password: joi_1.default.string().required().messages({
        "string.empty": "Password is required",
    }),
});
