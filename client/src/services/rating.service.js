import { axiosInstance } from "@/config/axios.config";

export class RatingService {
  static async updateRatingByCarId(carId, payload) {
    try {
      const { data } = await axiosInstance.post(`/rating/${carId}`, payload);
      return data;
    } catch (e) {
      throw e;
    }
  }
}
