import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car } from "../models/index.js";

export class RatingController {
  static async updateRatingByCarId(req, res) {
    try {
      const { carId } = req.params;
      const { rating } = req.body;

      if (!carId)
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No car id provided" });

      const car = await Car.findOne({ where: { id: carId } });

      if (!car)
        return res
          .status(STATUS_CODE.NOT_FOUND)
          .json({ message: "Car not found" });

      car.rating = [...car.rating, rating];

      await car.save();

      return res
        .status(STATUS_CODE.OK)
        .json({ message: "Rating updated successfully" });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
