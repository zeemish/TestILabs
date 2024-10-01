"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../../controllers/AuthController");
const auth_1 = require("../../validator/auth");
const validation_1 = require("../../middlewares/validation");
const router = (0, express_1.Router)();
// Define the route and bind the register method to the controller
router.post("/register", (0, validation_1.validate)(auth_1.registerSchema), AuthController_1.AuthController.registerAccount);
router.post("/login", (0, validation_1.validate)(auth_1.loginSchema), AuthController_1.AuthController.login);
exports.default = router;
