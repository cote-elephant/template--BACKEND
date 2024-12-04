import { Router } from "express";

//_______ CONTROLLER_______
import { getUsers, getUserById } from "../controllers/User/getUser.js";
import { createUser } from "../controllers/User/createUser.js";
import { updateUserById } from "../controllers/User/updateUser.js";
import { deleteUser } from "../controllers/User/deleteUser.js";

//_______ VALIDATOR_______
import { userValidator } from "../middlewares/userValidator.js";
import { validateRequest } from "../middlewares/validateRequest.js";

const userRouter = Router();

userRouter
  .route("/")
  .get(getUsers)
  .post(userValidator, validateRequest, createUser);

userRouter
  .route("/:userID")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUser);

// .get(getUserById)
// .put(updateUserById)

// durch die auth middleware und forceDeleteSingleUser/
// -> if admin -> like a boss
// -> if not admin -> only change own user data

export default userRouter;
