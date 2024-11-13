// __________________ IMPORT __________________
import express, { urlencoded } from "express";
import morgan from "morgan";
import userRouter from "./routes/userRouter.js";
// import { invalidPath } from "./middlewares/invalidPath.js";
import { readUsersData } from "./functions/readUsersData.js";
import { writeUsersData } from "./functions/writeUsersData.js";

const PORT = 3000; // process.env.?
const app = express(); // invoke express

app.use(morgan("dev"));
//app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/user", userRouter);

// app.use("*", invalidPath);
//? app.all("?", invalidPath);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
