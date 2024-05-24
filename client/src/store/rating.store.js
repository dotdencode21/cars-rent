import { RatingService } from "@/services/rating.service";
import { create } from "zustand";

export const useRatingStore = create((set) => ({
  error: null,

  updateRatingByCarId: async (carId, payload) => {
    try {
      await RatingService.updateRatingByCarId(carId, payload);
    } catch (e) {
      set({ error: e });
    }
  },
}));
