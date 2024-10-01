"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "customer",
    },
    wallet: {
        type: String,
        default: 0,
    },
    currency: {
        type: String,
        default: "EUR",
    },
    city: {
        type: String,
    },
    describe: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        getters: true,
    },
    toObject: {
        getters: true,
    },
});
class User {
}
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
