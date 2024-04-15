import {
  comparePasswords,
  createHashPassword,
} from "../helpers/password.helper.js";
import { createJWTtoken } from "../helpers/token.helper.js";
import { User } from "../models/index.js";
import { STATUS_CODE } from "../constants/statusCodes.js";

export class AuthController {
  static async signIn(req, res) {
    try {
      if (
        !Object.keys(req.body).length ||
        !Object.values(req.body).every(Boolean)
      ) {
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No data provided" });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ where: { email } });

      if (!candidate) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({
          message: "A user with given credentials doesn't exist",
        });
      }

      const isPasswordCompared = await comparePasswords(
        password,
        candidate.password
      );

      if (!isPasswordCompared) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({
          message: "Wrong password",
        });
      }

      return res.status(STATUS_CODE.OK).json({ id: candidate.id });
    } catch (e) {
      res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }

  static async signUp(req, res) {
    try {
      if (
        !Object.keys(req.body).length ||
        !Object.values(req.body).every(Boolean)
      ) {
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No data provided" });
      }

      const { email, password } = req.body;

      const isUserExists = await User.findOne({ where: { email } });

      if (isUserExists) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({
          message: `A user with the username ${username} already exists`,
        });
      }

      const hashedPassword = await createHashPassword(password);

      const isAdmin = email.includes("admin") && password === "admin";

      const user = await User.create({
        email,
        password: hashedPassword,
        role: isAdmin ? "admin" : "common",
        isAdmin,
      });

      return res
        .status(STATUS_CODE.CREATED)
        .json({ accessToken: createJWTtoken({ id: user.id }) });
    } catch (e) {
      res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
