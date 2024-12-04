import { validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }
  res.status(500).json({ errors: result.array() });
};
