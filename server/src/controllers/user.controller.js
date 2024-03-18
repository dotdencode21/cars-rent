import { STATUS_CODE } from "../constants/statusCodes.js";
import { User } from "../models/user.model.js";

export class UserController {
  static async getUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.status(STATUS_CODE.OK).json({ users });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "No users found" });
    }
  }

  static async getUserById(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No user id provided" });
      }

      const user = await User.findOne({ where: { id: userId } });

      if (!user) {
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: `User with ${userId} not found` });
      }

      return res.status(STATUS_CODE.OK).json({ user });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "User not found" });
    }
  }
}
