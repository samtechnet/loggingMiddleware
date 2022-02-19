import express from 'express';
import loggerRoute from './apis/logger';
import logger2Route from './apis/logger2';

 

const routes = express.Router();

routes.get('/',  (req, res) => {

    res.status(200).send(' This is Middleware routes')
})

routes.use('/logger', loggerRoute);
routes.use('/logger2', logger2Route)



export default routes