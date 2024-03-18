import { UserService } from "@/services/user.service";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  currentUser: null,
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

      set({ currentUser: user ? user : null });
    } catch (e) {
      set({ error: e });
    }
  },
}));
