import { User } from "../../models/userModel.js";

//* ================ GET/READ ALL ==================
export async function getUsers(req, res, next) {
  try {
    const get = await User.find();
    res.json(get);
  } catch (error) {
    res.status(500).json({ message: "failed to retrieve users" });
    next(error);
  }
}

//* _______________ GET :id _______________
export async function getUserById(req, res, next) {
  try {
    console.log(req.params.userID)
    const user = await User.findById(req.params.userID);
    console.log(user)
    
      res.json({ message: "GET a user by ID", data: user });
    // } else {
    //   res.status(404).json({ message: "User not found" });
    // }
  } catch (error) {
    next(error);
  }
}
