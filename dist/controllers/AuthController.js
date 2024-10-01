"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../services/AuthService");
class AuthController {
    static registerAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                console.log(payload);
                const data = yield AuthService_1.AuthService.createAccount(payload);
                return res.status(data === null || data === void 0 ? void 0 : data.statusCode).json(Object.assign({}, data));
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    message: "Error creating account",
                    error: error,
                });
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                console.log({ payload });
                const data = yield AuthService_1.AuthService.login(payload);
                console.log(data);
                return res.status(data === null || data === void 0 ? void 0 : data.statusCode).json(Object.assign({}, data));
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    message: "Error to login",
                    error: error,
                });
            }
        });
    }
}
exports.AuthController = AuthController;
