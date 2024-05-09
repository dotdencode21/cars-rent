import { CarService } from "@/services/car.service";
import { create } from "zustand";

export const useCarStore = create((set) => ({
  cars: [],
  isSuccessful: false,

  getCars: async (params = "") => {
    const cars = await CarService.getCars(params);

    set({ cars: cars.length ? cars : [] });
  },
  createCar: async (payload) => {
    const car = await CarService.createCar(payload);

    set({ isSuccessful: car && Object.keys(car).length });

    setTimeout(() => {
      set({ isSuccessful: false });
    }, 3250);
  },
}));
