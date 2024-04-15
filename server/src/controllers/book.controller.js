import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car, User } from "../models/index.js";
import { dbService } from "../services/db.service.js";

export class BookController {
  static async bookCarByUserIdAndCarId(req, res) {
    try {
      const { userId, carId } = req.params;

      if (!(carId && userId)) return res.status(STATUS_CODE.BAD_REQUEST).json({ message: "No car id or user id provided" });

      const [, updatedCar] = await Car.update(
        { isBooked: true, amountOfBooking: dbService.literal('"amountOfBooking" + 1') },
        {
          where: { id: carId },
          returning: true,
        }
      );

      if (!updatedCar.length) return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });

      const bookedCar = updatedCar[0].dataValues;

      const [, updatedUser] = await User.update(
        { bookedCarId: bookedCar.id },
        {
          where: { id: userId },
          returning: true
        }
      );

      if (!updatedUser.length) return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error" });

      return res.status(STATUS_CODE.OK).json({ message: "Car has been successfully booked" })
    } catch (e) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error", error: e });
    }
  }
}