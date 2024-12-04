import {body} from "express-validator";

export const userValidator = [
  body("username")
    .trim()
    .custom(reg => {
      const reg = /blabla/
      if(reg !== ??){
        throw new Error("the username is invalid")
      } else return true;
    })
    .isLength({ min: 6, max: 20 })
    .withMessage("Username must be at least 3 characters long"),

  body("password")
    .notEmpty()
    .trim()
    .isStrongPassword()
    .withMessage("Password must be at least 6 characters long"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address"),

  body("profile.firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long"),

  body("profile.lastName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long"),

  body("profile.age")
    .trim()
    .isInt()
    .withMessage("Age must be a number")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Age must be between 1 and 100");
      } else return true;
    }),

  body("profile.adress.street1").trim(),

  body("profile.adress.street2").optional().trim(),

  body("profile.address.city")
    .trim()
    .isLength({ min: 2 })
    .withMessage("City must be at least 2 characters long"),

  body("profile.address.state")
    .trim()
    .isLength({ min: 2 })
    .withMessage("State must be at least 2 characters long"),

  body("profile.address.country")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Country must be at least 2 characters long"),

  body("profile.address.zip")
    .trim()
    .isPostalCode("DE") // DE is the country code for Germany
    .isLength({ min: 2 })
    .withMessage("Zip must be at least 2 characters long"),
];
