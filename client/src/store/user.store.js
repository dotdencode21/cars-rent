import { OAuthService } from "@/services/oauth.service";
import { UserService } from "@/services/user.service";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  currentUser: null,
  isLogged: false,
  error: null,

  async getUsers() {
    try {
      const users = await UserService.getUsers();

      set({ users: users ? users : [] });
    } catch (e) {
      set({ error: e });
    }
  },
  async getUserById(userId) {
    try {
      const user = await UserService.getUserById(userId);

      const isUser = user && Object.keys(user).length;

      set({
        currentUser: isUser ? user : null,
        isLogged: isUser,
      });
    } catch (e) {
      set({ error: e });
    }
  },
  async updateUserById(userId, payload) {
    try {
      const user = await UserService.updateUserById(userId, payload);

      set({ currentUser: user[0] ? user[0] : null });
    } catch (e) {
      set({ error: e });
    }
  },
  async getUserViaFacebook(code) {
    try {
      const user = await OAuthService.oauthViaFacebook(code);

      const isUser = user && Object.keys(user).length;

      set({
        currentUser: isUser ? user : null,
        isLogged: isUser,
      });

      return user;
    } catch (e) {
      set({ error: e });
    }
  },
}));
