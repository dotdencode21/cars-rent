import { AuthService } from "@/services/auth.service";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  error: null,

  async signIn(data) {
    try {
      const userId = await AuthService.signIn(data);

      return userId;
    } catch (e) {
      set({ error: e });
    }
  },
  async signUp(data) {
    try {
      const accessToken = await AuthService.signUp(data);

      return accessToken;
    } catch (e) {
      set({ error: e });
    }
  },
}));
