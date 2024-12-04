//* __________________ IMPORT __________________
import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import morgan from "morgan";

//_______ ROUTES
import userRouter from "./routes/userRouter.js";
import { invalidRouter } from "./routes/invalidRouter.js";

//_______ MIDDLEWARES
import { errorHandler } from "./middlewares/errorHandler.js";
// import { logger } from "./middlewares/logger.js";

const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE_NAME || "userDB";
const MONGO_DB_URI =
process.env.MONGODB_URI || `mongodb://localhost:27017/USER_BACKEND`;
dotenv.config(); //invoke .env
const app = express(); // invoke express

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);

app.use("*", invalidRouter);

app.use(errorHandler);

mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log(`Connection with mongoDB: SUCCESS ✅`);
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Connection with mongoDB: FAILED ⛔`, error);
  });
mongoose.connection.on(`error`, (error) => {
  console.error("Error connecting to the database:", error);
});
