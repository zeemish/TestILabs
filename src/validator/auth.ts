import Joi from "joi";

// Define registration schema
export const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters long",
  }),
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),
  country: Joi.string().required().messages({
    "string.empty": "Billing country is required.",
  }),
  describe: Joi.string().required().messages({
    "string.empty": "Describe is required.",
  }),
});

// Define login schema
export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Invalid email format",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});
