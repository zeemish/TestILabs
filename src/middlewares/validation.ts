import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validate = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false }); // Validate request body

        if (error) {
            const errors = error.details.map(detail => detail.message); // Extract error messages
            return res.status(400).json({ errors });
        }

        next(); // Proceed if no validation errors
    };
};
