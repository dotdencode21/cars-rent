import { CarService } from "@/services/car.service";
import { create } from "zustand";

export const useCarStore = create((set) => ({
  cars: [],
  currentCar: null,
  isSuccessful: false,

  getCars: async (params = "") => {
    const cars = await CarService.getCars(params);

    set({ cars: cars.length ? cars : [] });

    return cars;
  },
  getCarById: async (carId) => {
    const car = await CarService.getCarById(carId);

    set({ currentCar: car && Object.keys(car).length ? car : null });

    return car;
  },
  createCar: async (payload) => {
    const car = await CarService.createCar(payload);

    set({ isSuccessful: car && Object.keys(car).length });

    setTimeout(() => {
      set({ isSuccessful: false });
    }, 3250);
  },
  updateCarById: async (carId, payload) => {
    const car = await CarService.updateCarById(carId, payload);

    set({ isSuccessful: car && Object.keys(car).length });

    setTimeout(() => {
      set({ isSuccessful: false, currentCar: null });
    }, 3250);
  },
  deleteCarById: async (carId) => {
    const message = await CarService.deleteCarById(carId);

    set({ isSuccessful: !!message });

    setTimeout(() => {
      set({ isSuccessful: false });
    }, 3250);
  },
  markCarAsFavorite: async (payload) => {
    const message = await CarService.markCarAsFavorite(payload);

    set({ isSuccessful: !!message });

    setTimeout(() => {
      set({ isSuccessful: false });
    }, 3250);
  },
}));
