"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false }); // Validate request body
        if (error) {
            const errors = error.details.map(detail => detail.message); // Extract error messages
            return res.status(400).json({ errors });
        }
        next(); // Proceed if no validation errors
    };
};
exports.validate = validate;
