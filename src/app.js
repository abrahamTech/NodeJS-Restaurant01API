import express from "express";
import morgan from "morgan";

const app = express();

//Middlewares
app.use(morgan("dev"));

export default app;