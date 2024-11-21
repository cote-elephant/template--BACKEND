//* __________________ IMPORT __________________
import express, { urlencoded } from "express";
import cors from "cors"
import mongoose from "mongoose";
// import morgan from "morgan";

//_______ ROUTES
import userRouter from "./routes/userRouter.js";

//_______ FUNCTIONS
import {startServer} from "../functions/startServer.js"

//_______ MIDDLEWARES
import { errorHandler } from "./middlewares/errorHandler.js";
import { invalidRouter } from "./middlewares/invalidRouter.js";
import { logger } from "./middlewares/logger.js";


const PORT = process.env.PORT || 5000;
const MONGO_DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
const app = express(); // invoke express

// app.use(morgan("dev"));
//app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);

app.use("*", invalidRouter);

app.use(errorHandler);

connectToDB(MONGODB_URI)
  .then(() => startServer())
  .catch((error) => {
    console.error(error);
    // process.exit(2)
  });