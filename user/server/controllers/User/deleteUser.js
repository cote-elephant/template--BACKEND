import { User } from "../../models/userModel.js";

//* ================ SOFT DELETE ==================
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userID);
    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      next(error);
    }
    user.deleted = true;
    await user.save();
    res.json({ message: `${user.firstName} ${user.lastName} soft deleted` });
  } catch (error) {
    res.status(500).json({ message: `${user} couldn't be soft deleted` });
    next(error);
  }
};
