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
exports.AuthService = void 0;
const jwtHelper_1 = require("../helpers/jwtHelper");
const passwordHelper_1 = require("../helpers/passwordHelper");
const AppSuccess_1 = require("../middlewares/AppSuccess");
const UserService_1 = require("./UserService.");
class AuthService {
    static createAccount(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(body);
            const { status, statusCode, data, message } = yield UserService_1.UserService.createUser(body);
            if (!status)
                return { statusCode, message };
            const token = (yield jwtHelper_1.JwtService.signToken(data._id, data === null || data === void 0 ? void 0 : data.role)).access_token;
            return (0, AppSuccess_1.successResponse)({ token, user: data }, message, statusCode);
        });
    }
    static login(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = body;
            const user = yield UserService_1.UserService.findUser(email);
            if (!user)
                return { statusCode: 404, message: "User not found" };
            const isValidPass = yield (0, passwordHelper_1.ComparePassword)(password, user === null || user === void 0 ? void 0 : user.password);
            if (!isValidPass)
                return { statusCode: 400, message: "Incorrect password." };
            const token = (yield jwtHelper_1.JwtService.signToken(user === null || user === void 0 ? void 0 : user._id)).access_token;
            return (0, AppSuccess_1.successResponse)({ token, user }, "Login successfully", 200);
        });
    }
}
exports.AuthService = AuthService;
