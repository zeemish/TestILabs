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
exports.JwtService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../configuration/config");
class JwtService {
    constructor() { }
    static signToken(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, role = "") {
            const expiresIn = '7d';
            const secret = (0, config_1.configs)();
            const userInfo = { user: id, role: role };
            // const token = sign(userInfo, secret, { expiresIn });
            const token = (0, jsonwebtoken_1.sign)(userInfo, secret.jwt.secretOrKey, { expiresIn });
            return {
                expires_in: expiresIn,
                access_token: token,
            };
        });
    }
}
exports.JwtService = JwtService;
// // const token = jwt.sign(
// //     {
// //         login_token: jsonToken,
// //         access: 'auth',
// //     },
// //     secret,
// //     { expiresIn: "24h" }
// // ).toString();
