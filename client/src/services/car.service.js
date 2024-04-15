import { axiosInstance } from "@/config/axios.config";

export class CarService {
  static async getCars(params = "") {
    try {
      const {
        data: { cars },
      } = await axiosInstance.get(`/cars${params.length ? `?${params}` : ""}`);

      return cars;
    } catch (e) {
      throw e;
    }
  }

  static async createCar(payload) {
    try {
      const {
        data: { car },
      } = await axiosInstance.post("/cars/create", payload);

      return car;
    } catch (e) {
      throw e;
    }
  }

  static async updateCar(payload) {
    try {
      const { carId, ...rest } = payload;
    } catch (e) {
      throw e;
    }
  }

  static async deleteCar(carId) {
    try {
    } catch (e) {
      throw e;
    }
  }
}
