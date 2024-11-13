import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  partlyUpdateUserById,
  deleteAllUser,
  deleteUserById
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter
    .route("/")
    .get(getAllUsers)
    .post(createUser)
    .delete(deleteAllUser)

userRouter
    .route("/:id")
    .get(getUserById)
    .put(updateUserById)
    .patch(partlyUpdateUserById)
    .delete(deleteUserById)

    // durch die auth middleware 
    // -> if admin -> like a boss
    // -> if not admin -> only change own user data

export default userRouter;
