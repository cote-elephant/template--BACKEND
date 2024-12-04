import { User } from "../../models/userModel.js";

//* ================ UPDATE ==================
export const updateUserById = async (req, res, next) => {
  try {
    const userID = req.params.userID;
    const updateUser = await User.findByIdAndUpdate(
      req.params.userID,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    let updateMessage = "";

    if (updateUser !== -1) {
      // search key in updatedUser
      for (const key in updateUser) {
        // looping through keys but which one has changed?
        // hasOwnProperty
        // -> boolean
        // -> checks if the keys content is available
        if (updateUser.hasOwnProperty(key)) {
          switch (key) {
            case "firstName":
              updateMessage += `First name of User ID ${userID} has been updated.\n `;
              break;
            case "lastName":
              updateMessage += `Last name of User ID ${userID} has been updated.\n `;
              break;
            case "birthDay":
              updateMessage += `Birthday of User ID ${userID} has been updated.\n `;
              break;
            case "city":
              updateMessage += `City of User ID ${userID} has been updated.\n `;
              break;
            case "job":
              updateMessage += `Job of User ID ${userID} has been updated.\n `;
              break;
            default:
              updateMessage += `The field ${key} of User ID ${userID} has been updated.\n `;
              break;
          }
        }
      }
      User[userID] = { ...User[userID], ...updateUser };
      res.json({
        message: updateMessage,
        data: User[userID],
      });
      //besser Output wie "User 'ID' has been changed: 'ChangeThing'"
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "failed to update user" });
    next(error);
  }
};

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
