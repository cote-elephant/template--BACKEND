import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(getUsers)
  .post(createUser);

userRouter
  .route("/:userID")
  .patch(updateUser)
  .delete(deleteUser);
// .get(getUserById)
// .put(updateUserById)

// durch die auth middleware und forceDeleteSingleUser/
// -> if admin -> like a boss
// -> if not admin -> only change own user data

export default userRouter;
