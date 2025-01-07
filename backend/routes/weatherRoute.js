import express from 'express';
import axios from 'axios';
import weatherController from '../controllers/weatherController.js';

const weatherRouter = express.Router();

weatherRouter.get('/:city', weatherController);

export default weatherRouter;