import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { sendEmail } from '../services/mail.service.js';

const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const isUserExists = await userModel.findOne({ $or: [{ username }, { email }] });

        if (isUserExists) {
            return res.status(400).json({
                message: "User already exists with this username or email",
                success: false,
                error: "User already exists"
            });
        }

        const user = await userModel.create({ username, email, password });

        await sendEmail({
            to: email,
            subject: "Welcome to perplixity - MinAI",
            html: `<p> Hi ${username},</p>
            <p>Thank you for registering at <strong>Perplexity</strong>. We're excited to have you onboard.</p>
            <p>Best Regards,<br /> The Perplexity Team</p>`
        })

        return res.status(201).json({
            message: "User registered successfully",
            success: true,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Error in registerController:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export default registerController;   