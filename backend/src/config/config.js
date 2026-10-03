import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN || '',
    GOOGLE_USER_EMAIL: process.env.GOOGLE_USER_EMAIL || ''
};

export default config;   