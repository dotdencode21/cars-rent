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

  static async getCarById(carId) {
    try {
      const {
        data: { car },
      } = await axiosInstance.get(`/cars/${carId}`);

      return car;
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

  static async updateCarById(carId, payload) {
    try {
      const {
        data: { car },
      } = await axiosInstance.put(`/cars/${carId}`, payload);

      return car;
    } catch (e) {
      throw e;
    }
  }

  static async deleteCarById(carId) {
    try {
      const {
        data: { message },
      } = await axiosInstance.delete(`/cars/${carId}`);

      return message;
    } catch (e) {
      throw e;
    }
  }

  static async markCarAsFavorite(payload) {
    const { userId, carId, isFavorite } = payload;

    try {
      const {
        data: { message },
      } = await axiosInstance.post(`/favorite/${userId}/${carId}`, {
        isFavorite,
      });

      return message;
    } catch (e) {
      throw e;
    }
  }
}
