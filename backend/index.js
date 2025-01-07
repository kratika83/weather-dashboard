import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import connect from './utils/dbConnection.js';
connect();

import express from 'express';
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

import weatherRouter from './routes/weatherRoute.js';
app.use('/api/weather', weatherRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});