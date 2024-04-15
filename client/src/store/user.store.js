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

      set({
        currentUser: user ? user : null,
        isLogged: user && Object.keys(user).length,
      });
    } catch (e) {
      set({ error: e });
    }
  },
  async updateUserById(userId, payload) {
    try {
      const user = await UserService.updateUserById(userId, payload);

      set({ currentUser: user ? user : null });
    } catch (e) {
      set({ error: e });
    }
  },
  getUserViaFacebook(code) {
    try {
      OAuthService.oauthViaFacebook(code).then((user) => {
        console.log(user);
        set({
          currentUser: user ? user : null,
          isLogged: user && Object.keys(user).length,
        });
      });
    } catch (e) {
      set({ error: e });
    }
  },
}));
