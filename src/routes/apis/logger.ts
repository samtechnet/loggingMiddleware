import express from 'express';
import logger from '../middleware';


const loggerRoute = express.Router();



loggerRoute.get('/', logger, (req: express.Request, res: express.Response,)  => {


    res.status(200).send(' logging middleware was successful')
})


export default loggerRoute