import express from "express";
import routes from "./src/routes/index";

const app = express();

const PORT = 5001;

app.use('/apis', routes);

const logger = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('i am middleware')

    next()
}
app.get('/', logger, (req, res) => {


    res.send(' This is from base server')
})








app.listen(PORT, () => console.log(`app started on port ${PORT}`));

export default app
