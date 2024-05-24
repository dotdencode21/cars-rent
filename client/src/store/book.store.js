import { BookService } from "@/services/book.service";
import { create } from "zustand";

export const useBookStore = create((set) => ({
  error: null,

  bookCarByUserIdAndCarId: async (userId, carId, payload) => {
    try {
      await BookService.bookCarByUserIdAndCarId(userId, carId, payload);
    } catch (e) {
      set({ error: e });
    }
  },
}));
