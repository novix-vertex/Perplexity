import { body } from 'express-validator';

export const registerValidator = [
    body('username')
        .notEmpty().withMessage('Username is required'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),

    body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),

]; 