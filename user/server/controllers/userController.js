// import fs from "fs";
import { User } from "../models/userSchema.js";

//* ================ READ ==================
export const getUsers = async (req, res, next) => {
  try {
    const get = await User.find();
    res.json(get);
  } catch (error) {
    res.status(500).json({ message: "failed to retrieve users" });
    next(error);
  }
};
//* ================ CREATE ==================
export const createUser = async (req, res, next) => {
  try {
    const create = await User.create(req.body);
    await User.create(user);
    res.status(201).json({ message: `${user} successfully created` });
  } catch (error) {

    //res.status(500).json({ message: `failed to create §{create}`});

    //? Hier  geht ${create} nicht, da evtl. bei User.create() fehlerhaft ?
    const error = new Error("Creating a new user failed.");
    error.status = 500;

    next(error);
  }
};

//* ================ UPDATE ==================
export const updateUser = async (req, res, next) => {
  try {
    const update = await User.findByIdAndUpdate(
      req.params.userID,
      { $set: req.body },
      { new: true, runValidators: true }
    );
  } catch (error) {
    const error = new Error("Updating the user failed");
    error.status = 500;
    next(error);
  }
};

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
    await book.save();
    res.json({ message: `${user} soft deleted` });
  } catch (error) {
    next(error);
  }
};

// //* _____________ GET ALL______________
// export function getAllUsers(req, res, next) {
//   try {
//     // if(!usersData){
//     //   throw new error("usersData not available")
//     // }
//     res.json({ message: "GET all users", data: usersData });
//   } catch (error) {
//     error.message = "Data not found";
//     error.status = 404;
//     next(error);
//   }
// }

// //* _______________ GET :id _______________
// export async function getUserById(req, res, next) {
//   try {
//     const userId = parseInt(req.params.id);
//     const user = usersData.find((user) => user.id === userId);
//     if (user) {
//       res.json({ message: "GET a user by ID", data: user });
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     error.message = "Data/:id not found";
//     error.status = 404;
//     next(error);
//   }
// }

// //*___________ POST / CREATE ____________
// export async function createUser(req, res, next) {
//   try {
//     const newUser = req.body;
//     console.log(req.body);
//     const userExists = usersData.some((user) => user.id === newUser.id);
//     console.log(req.body);
//     if (userExists) {
//       return res
//         .status(409)
//         .json({ message: "This user already exists", data: req.body });
//     }
//     usersData.push(newUser);
//     writeUsersData(usersData);
//     res.status(201).json({ message: "POST a new user", data: newUser });
//   } catch (error) {
//     error.message = "New data not posted";
//     error.status = 404;
//     next(error);
//   }
// }

// //*_____________ UPDATE MANY THING________________
// export async function updateUserById(req, res, next) {
//   try {
//     const userId = parseInt(req.params.id);
//     const index = usersData.findIndex((user) => user.id === userId);
//     const updatedUser = req.body;

//     if (index !== -1) {
//       usersData[index] = updatedUser;
//       res.json({
//         message: "User updated.",
//         data: usersData[index],
//       });
//     } else {
//       res.status(404).json({ message: "User not found." });
//     }
//   } catch (error) {
//     error.message = "Update failed";
//     error.status = 404;
//     next(error);
//   }
// }

// //*______________ UPDATE ONLY ONE THING____________
// export async function partlyUpdateUserById(req, res, next) {
//   try {
//     const userId = parseInt(req.params.id);
//     const index = usersData.findIndex((user) => user.id === userId);
//     const updatedUser = req.body;
//     let updateMessage = "";

//     if (index !== -1) {
//       // search key in updatedUser
//       for (const key in updatedUser) {
//         // looping through keys but which one has changed?
//         // hasOwnProperty
//         // -> boolean
//         // -> checks if the keys content is available
//         if (updatedUser.hasOwnProperty(key)) {
//           switch (key) {
//             case "firstName":
//               updateMessage += `First name of User ID ${userId} has been updated. `;
//               break;
//             case "lastName":
//               updateMessage += `Last name of User ID ${userId} has been updated. `;
//               break;
//             case "birthDay":
//               updateMessage += `Birthday of User ID ${userId} has been updated. `;
//               break;
//             case "city":
//               updateMessage += `City of User ID ${userId} has been updated. `;
//               break;
//             case "job":
//               updateMessage += `Job of User ID ${userId} has been updated. `;
//               break;
//             default:
//               updateMessage += `The field ${key} of User ID ${userId} has been updated. `;
//               break;
//           }
//         }
//       }
//       usersData[index] = { ...usersData[index], ...updatedUser };
//       res.json({
//         message: updateMessage,
//         data: usersData[index],
//       });
//       //besser Output wie "User 'ID' has been changed: 'ChangeThing'"
//     } else {
//       res.status(404).json({ message: "User not found." });
//     }
//   } catch (error) {
//     error.message = "Update failed";
//     error.status = 404;
//     next(error);
//   }
// }

// //*_____________DELETE A USER PARTLY_______________
// export async function deleteUserById(req, res, next) {
//   try {
//     const userId = parseInt(req.params.id);
//     const index = usersData.findIndex((item) => item.id === userId);

//     if (index !== -1) {
//       const deletedUser = usersData.splice(index, 1);
//       writeUsersData(usersData);
//       res
//         .status(200)
//         .json({
//           message: `User '${deletedUser[0].id}' deleted on ${new Date()}`,
//         });
//     } else {
//       res.status(404).json({ message: `User '${deletedUser.id}' not found!` });
//     }
//   } catch (error) {
//     error.message = "Delete failed";
//     error.status = 404;
//     next(error);
//   }
// }

// //!__________DELETE A USER COMPLETELY _____________
// export function deleteAllUser(req, res, next) {
//   try {
//     usersData = [];
//     writeUsersData(usersData);
//     res.json({
//       message: "- - - ALL USERS ARE DELETED AND THE FILE IS EMPTY - - -",
//     });
//   } catch (error) {
//     error.message = "Delete failed";
//     error.status = 404;
//     next(error);
//   }
// }
