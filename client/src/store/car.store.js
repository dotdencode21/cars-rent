import { CarService } from "@/services/car.service";
import { create } from "zustand";

export const useCarStore = create((set) => ({
  cars: [],

  getCars: async (params = "") => {
    const cars = await CarService.getCars(params);

    set({ cars: cars.length ? cars : [] });
  },
}));
