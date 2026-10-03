import nodemailer from "nodemailer"
import config from "../config/config.js"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: config.GOOGLE_USER_EMAIL,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        refreshToken: config.GOOGLE_REFRESH_TOKEN,
        clientId: config.GOOGLE_CLIENT_ID
    }
});

transporter.verify()
    .then(() => {
        console.log("Email Transporter is ready to send emails")
    })
    .catch((err) => {
        console.error("Email Transporter Error:", err)
    });

export const sendEmail = async ({ to, subject, html, text="" }) => {
    
    const mailOptions = {
        from: config.GOOGLE_USER_EMAIL,
        to,
        subject,
        html,
        text
    }

    const details = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", details);
}

