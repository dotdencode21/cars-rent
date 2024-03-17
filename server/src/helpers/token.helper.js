import jwt from "jsonwebtoken";
import "../config/dev.config.js";

export const createJWTtoken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "3d" });
};

export const verifyJWTtoken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
