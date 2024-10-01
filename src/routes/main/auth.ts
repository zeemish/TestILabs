import { Router } from 'express';
import { AuthController } from '../../controllers/AuthController';
import { loginSchema, registerSchema } from '../../validator/auth';
import { validate } from '../../middlewares/validation';

const router = Router();

// Define the route and bind the register method to the controller
router.post("/register", validate(registerSchema), AuthController.registerAccount);
router.post("/login", validate(loginSchema), AuthController.login);

export default router;
