import { axiosInstance } from "@/config/axios.config";

export class RecommendationService {
  static async getAssociations(query) {
    try {
      const {
        data: { cars },
      } = await axiosInstance.get(
        `/associations${query ? `?locationType=${query}` : ""}`
      );

      return cars;
    } catch (e) {
      throw e;
    }
  }

  static async createAssociation(payload) {
    try {
      const { data } = await axiosInstance.post(
        "/associations/create",
        payload
      );

      return data;
    } catch (e) {
      throw e;
    }
  }
}
