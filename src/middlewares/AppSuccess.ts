import { Request, Response, NextFunction } from 'express';

// Success Response Middleware
export const successResponse = (data?: any, message: string = 'Success', statusCode: number = 200) => {
    return {
        status: true,
        statusCode,
        message,
        data,
    };
};

export const sendSuccessResponse = (req: Request, res: Response, next: NextFunction) => {
    const { data, message, statusCode } = res.locals;
    res.status(statusCode).json({
        status: true,
        message,
        data,
    });
};

