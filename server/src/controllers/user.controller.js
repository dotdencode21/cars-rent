import { STATUS_CODE } from "../constants/statusCodes.js";
import { User } from "../models/index.js";

export class UserController {
  static async getUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
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

      const user = await User.findOne({
        where: { id: userId },
        attributes: {
          exclude: ["password"],
        },
      });

      if (!user) {
        return res
          .status(STATUS_CODE.NOT_FOUND)
          .json({ message: `User with ${userId} not found` });
      }

      return res.status(STATUS_CODE.OK).json({ user });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "User not found" });
    }
  }

  static async updateUserById(req, res) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No user id provided" });
      }

      const [_, updatedUser] = await User.update(
        { ...req.body },
        {
          where: { id: userId },
          returning: true,
        }
      );

      if (!updatedUser.length)
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error" });

      const { password, ...rest } = updatedUser;

      return res.status(STATUS_CODE.OK).json({ user: rest });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
