import express from 'express';


const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('i am mid')

    next()
};

const time = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('time:', Date.now())

    next()
};

const middlewar = [time];


export default  middlewar;time; logger