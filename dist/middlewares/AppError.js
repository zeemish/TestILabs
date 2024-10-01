"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleNotFound = exports.GlobalErrorHandler = void 0;
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
const GlobalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    console.error('ERROR 💥:', err);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message || 'Something went wrong!',
    });
};
exports.GlobalErrorHandler = GlobalErrorHandler;
const HandleNotFound = (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
};
exports.HandleNotFound = HandleNotFound;
