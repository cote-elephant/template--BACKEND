import { readUsersData } from "../functions/readUsersData.js";
import { writeUsersData } from "../functions/writeUsersData.js";
let usersData = readUsersData();

//* _____________ GET ALL______________
export async function getAllUsers(req, res, next) {
  try {
    res.json({ message: "GET all users", data: usersData });
  } catch (error) {
    next(error);
  }
}

//* _______________ GET :id _______________
export async function getUserById(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const user = usersData.find((user) => user.id === userId);
    if (user) {
      res.json({ message: "GET a user by ID", data: user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
}

//*___________ POST / CREATE ____________
export async function createUser(req, res, next) {
  try {
    const newUser = req.body;
    console.log(req.body);
    const userExists = usersData.some((user) => user.id === newUser.id);
    // console.log(req.body);
    if (userExists) {
      return res
        .status(409)
        .json({ message: "This user already exists", data: req.body });
    }
    usersData.push(newUser);
    writeUsersData(usersData);
    res.status(201).json({ message: "POST a new user", data: newUser });
  } catch (error) {
    next(error);
  }
}

//*_____________ UPDATE MANY THING________________
export async function updateUserById(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const index = usersData.findIndex((user) => user.id === userId);
    const updatedUser = req.body;

    if (index !== -1) {
      usersData[index] = updatedUser;
      res.json({
        message: "User updated.",
        data: usersData[index],
      });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    next(error);
  }
}

//*______________ UPDATE ONLY ONE THING____________
export async function partlyUpdateUserById(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const index = usersData.findIndex((user) => user.id === userId);
    const updatedUser = req.body;
    let updateMessage = "";

    if (index !== -1) {
      // search key in updatedUser
      for (const key in updatedUser) {
        // looping through keys but which one has changed?
        // hasOwnProperty
        // -> boolean
        // -> checks if the keys content is available
        if (updatedUser.hasOwnProperty(key)) {
          switch (key) {
            case "firstName":
              updateMessage += `First name of User ID ${userId} has been updated. `;
              break;
            case "lastName":
              updateMessage += `Last name of User ID ${userId} has been updated. `;
              break;
            case "birthDay":
              updateMessage += `Birthday of User ID ${userId} has been updated. `;
              break;
            case "city":
              updateMessage += `City of User ID ${userId} has been updated. `;
              break;
            case "job":
              updateMessage += `Job of User ID ${userId} has been updated. `;
              break;
            default:
              updateMessage += `The field ${key} of User ID ${userId} has been updated. `;
              break;
          }
        }
      }
      usersData[index] = { ...usersData[index], ...updatedUser };
      res.json({
        message: updateMessage,
        data: usersData[index],
      });
      //besser Output wie "User 'ID' has been changed: 'ChangeThing'"
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    next(error);
  }
}


//*_____________DELETE A USER PARTLY_______________
export async function deleteUserById(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const index = usersData.findIndex((item) => item.id === userId);

    if (index !== -1) {
      const deletedUser = usersData.splice(index, 1);
      writeUsersData(usersData);
      res
        .status(200)
        .json({ message: `User '${deletedUser[0].id}' deleted on ${new Date()}` });
    } else {
      res.status(404).json({ message: `User '${deletedUser.id}' not found!` });
    }
  } catch (error) {
    next(error);
  }
}

//!__________DELETE A USER COMPLETELY _____________
export function deleteAllUser(req, res, next) {
  try {
    usersData = [];
    writeUsersData(usersData);
    res.json({ message: "!!!!ALL USERS ARE DELETED. THE FILE IS EMPTY!!!!" });
  } catch (error) {
    next(error);
  }
}