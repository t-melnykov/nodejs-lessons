import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import logger from './middleware/common/logger.js';
dotenv.config();

const app = new express();
const port = process.env.APP_PORT || 3000;

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
