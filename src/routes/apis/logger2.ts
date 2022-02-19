import express from 'express';
import app from '../../..';
import middlewar from '../middleware';
//import time from '../middleware';

const logger2Route = express.Router();



logger2Route.get('/', middlewar, (req: express.Request, res: express.Response,)  => {


    res.status(200).send(' logging middleware was successful from endpoint 2')
})


export default logger2Route