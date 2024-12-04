import { User } from "../../models/userModel.js";

//* ================ CREATE ==================
export const createUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if(existingUser){
      return res.status(409).json({message: "Email already exists"})
    }
    const newUser = await User.create(req.body);
    res
      .status(201)
      .json({ message: `${newUser.name} successfully created`, newUser });
  } catch (error) {
    res.status(500).json({ message: "failed to create user" });
    next(error);
  }
};