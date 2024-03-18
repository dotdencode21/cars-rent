import { axiosInstance } from "@/config/axios.config";

export class UserService {
  static async getUsers() {
    try {
      const {
        data: { users },
      } = await axiosInstance.get("users");

      return users;
    } catch (e) {
      throw e;
    }
  }

  static async getUserById(userId) {
    try {
      const {
        data: { user },
      } = await axiosInstance.get(`users/${userId}`);

      return user;
    } catch (e) {
      throw e;
    }
  }
}
