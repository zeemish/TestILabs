"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccessResponse = exports.successResponse = void 0;
// Success Response Middleware
const successResponse = (data, message = 'Success', statusCode = 200) => {
    return {
        status: true,
        statusCode,
        message,
        data,
    };
};
exports.successResponse = successResponse;
const sendSuccessResponse = (req, res, next) => {
    const { data, message, statusCode } = res.locals;
    res.status(statusCode).json({
        status: true,
        message,
        data,
    });
};
exports.sendSuccessResponse = sendSuccessResponse;
