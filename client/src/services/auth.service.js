import { axiosInstance } from "@/config/axios.config";

export class AuthService {
  static async signIn(signInData) {
    try {
      const {
        data: { userId },
      } = await axiosInstance.post("auth/sign-in", signInData);

      return userId;
    } catch (e) {
      throw e;
    }
  }

  static async signUp(signUpData) {
    try {
      const {
        data: { accessToken },
      } = await axiosInstance.post("auth/sign-up", signUpData);

      return accessToken;
    } catch (e) {
      throw e;
    }
  }
}
