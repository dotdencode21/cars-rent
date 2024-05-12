import axios from "axios";

export class CityService {
  static async getCitites() {
    try {
      const { data } = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/cities",
        {
          country: "Ukraine",
        }
      );

      return data;
    } catch (e) {
      throw e;
    }
  }
}
