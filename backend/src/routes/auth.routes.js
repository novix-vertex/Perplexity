import express from 'express';
import { registerValidator } from '../validators/auth.validator.js';
import { validateRequest } from '../middlewares/validate.js'; 
import registerController from '../controller/auth.controller.js';

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username: String, email: String, password: String }
 */
authRouter.post('/register', registerValidator, validateRequest, registerController);

export default authRouter;