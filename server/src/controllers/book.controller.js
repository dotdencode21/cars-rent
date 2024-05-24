import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car, User, BookedCar } from "../models/index.js";

export class BookController {
  static async bookCarByUserIdAndCarId(req, res) {
    try {
      const { userId, carId } = req.params;
      const { isBooking } = req.body;

      if (!carId || !userId)
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No car id or user id provided" });

      const [car, user] = await Promise.all([
        Car.findByPk(carId),
        User.findByPk(userId),
      ]);

      if (!car || !user) {
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error" });
      }

      if (isBooking) {
        const { rentStartDate, rentEndDate, pricePerHour } = req.body;

        car.amountOfBooking += 1;

        await car.save();

        const bookedCar = await user.createBookedCar({ carId });

        bookedCar.rentStartDate = rentStartDate;
        bookedCar.rentEndDate = rentEndDate;
        bookedCar.pricePerHour = pricePerHour;

        await bookedCar.save();

        return res
          .status(STATUS_CODE.OK)
          .json({ message: "Car has been successfully booked" });
      }

      await BookedCar.destroy({ where: { carId } });

      return res
        .status(STATUS_CODE.OK)
        .json({ message: "Car has been successfully unbooked" });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
