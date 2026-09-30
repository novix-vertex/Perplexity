import app from './src/app.js';
import dotenv from 'dotenv';
import config from './src/config/config.js';
import connectDB from './src/config/database.js';

dotenv.config();
await connectDB();
const port = config.port || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

