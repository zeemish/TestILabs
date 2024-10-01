 import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import { dbConnect } from "./configuration/db";
import cors from 'cors'
import { GlobalErrorHandler, HandleNotFound } from "./middlewares/AppError";
import 'express-async-errors'
import { configs } from "./configuration/config";
import routes from "./routes/index"
config();

const app: Express = express();
const envs = configs(); // Access config object

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded())
app.use(express.json())
// app.use(GlobalErrorHandler);
// app.use(HandleNotFound);

app.use("/api/v1", routes)

app.get("/", (req: Request, res: Response) => {
    res.send(`<h1> INFROLABS | APIs</h1>`);
});

app.get("/success?:id", (req: Request, res: Response) => {
    res.send(`<h1> Success </h1>`);
});

app.get("/cancel", (req: Request, res: Response) => {
    res.send(`<h1> Success </h1>`);
});

dbConnect();
app.listen(envs?.port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
}); 