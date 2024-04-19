import { STATUS_CODE } from "../constants/statusCodes.js";
import { BookedCar, Car, User } from "../models/index.js";

export class BookController {
  static async bookCarByUserIdAndCarId(req, res) {
    try {
      const { userId, carId } = req.params;

      if (!(carId && userId))
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No car id or user id provided" });

      const car = await Car.findOne({ where: { id: carId } });

      if (!car) {
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error" });
      }

      car.amountOfBooking += 1;

      await car.save();

      const bookedCar = await BookedCar.create({ carId });

      if (!bookedCar) {
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error" });
      }

      await User.update(
        { bookedCarId: bookedCar.id },
        { where: { id: userId } }
      );

      return res
        .status(STATUS_CODE.OK)
        .json({ message: "Car has been successfully booked" });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
