import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import logger from './middleware/common/logger.js';
import morgan from 'morgan';
import qs from 'querystring';
import cors from 'cors';
dotenv.config();

const app = new express();
const port = process.env.APP_PORT || 3000;

//! Use own logger
// app.use(logger, router);

//! Use morgan logger
// app.use(morgan('tiny'), router);

//! Parse JSON request body
// app.use((req, res) => {
//     let json = '';
//     req.on('data', (chunk) => {
//         data += chunk;
//     });
//     req.on('end', () => {
//         req.body = JSON.parse(json);
//         // next();
//     });
//     res.send('Hello World');
// });
//! or
// app.use(express.json());
// app.use(router);

//! Parse formdata
// app.use((req, res) => {
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = '';
//         req.on('data', (chunk) => {
//             data += chunk;
//         });
//         req.on('end', () => {
//             req.body = qs.parse(data);
//             // next();
//         });
//     }
//     res.send('Hello World');
// });
//! or
// app.use(express.urlencoded({ extended: true }));
// app.use(router);

//! Add CORS headers
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'same-origin');
//     next();
// });
//! or
// app.use(cors());

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
