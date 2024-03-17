import {
  comparePasswords,
  createHashPassword,
} from "../helpers/password.helper.js";
import { createJWTtoken } from "../helpers/token.helper.js";
import { User } from "../models/auth.model.js";

export class AuthController {
  static async signIn(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ message: "No data provided" });
      }

      const { username, email, password } = req.body;

      const candidate = await User.findOne({ where: { username, email } });

      if (!candidate) {
        return res.status(400).json({
          message: "A user with given credentials is now exist",
        });
      }

      const isPasswordCompared = await comparePasswords(
        password,
        candidate.password
      );

      if (!isPasswordCompared) {
        return res.status(400).json({
          message: "Wrong password",
        });
      }

      return res.status(200).json({ user: candidate });
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error", error: e });
    }
  }

  static async signUp(req, res) {
    try {
      if (!Object.keys(req.body).length) {
        return res.status(400).json({ message: "No data provided" });
      }

      const { username, email, password } = req.body;

      const isUserExists = await User.findOne({ where: { username } });

      if (isUserExists) {
        return res.status(400).json({
          message: `A user with the nickname ${username} already exists`,
        });
      }

      const hashedPassword = await createHashPassword(password);

      const isAdmin = username === "admin" && password === "admin";

      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        role: isAdmin ? "admin" : "common",
        isAdmin,
      });

      return res
        .status(200)
        .json({ access_token: createJWTtoken({ userId: user.id }) });
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error", error: e });
    }
  }
}
