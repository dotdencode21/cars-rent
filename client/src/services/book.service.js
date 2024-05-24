import { axiosInstance } from "@/config/axios.config";

export class BookService {
  static async bookCarByUserIdAndCarId(userId, carId, payload) {
    try {
      const { data } = await axiosInstance.post(
        `/book/${userId}/${carId}`,
        payload
      );
      return data;
    } catch (e) {
      throw e;
    }
  }
}
