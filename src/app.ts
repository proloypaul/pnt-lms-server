import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status';
import cookieParse from "cookie-parser"
import router from './app/routes';

const app:Application = express();

const corsOptions = {
    origin: true,
    credential: true,
}
app.use("*", cors(corsOptions))
app.use(cookieParse())

//parse
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// router
app.use('/api/v1', router)

app.get("/", async (req:Request, res:Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({
        success: true,
        message: "Welcome To companyWala Server"
    })
})

export default app;