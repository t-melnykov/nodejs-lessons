import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = new express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Express JS');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
