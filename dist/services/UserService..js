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
exports.UserService = void 0;
const passwordHelper_1 = require("../helpers/passwordHelper");
const User_1 = require("../schemas/User");
class UserService {
    static createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const isEmailExist = yield User_1.UserModel.findOne({ email: body.email });
            if (isEmailExist)
                return { statusCode: 400, message: "Email already exist." };
            if (body.password)
                body.password = yield (0, passwordHelper_1.CreateHash)(body.password);
            const user = yield User_1.UserModel.create(body);
            if (!user)
                return { statusCode: 404, message: "Something went wrong " };
            return { status: true, statusCode: 200, data: user, message: "Account created successfully." };
        });
    }
    static findUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.UserModel.findOne({ email });
            return user;
        });
    }
}
exports.UserService = UserService;
