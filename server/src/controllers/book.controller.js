import { STATUS_CODE } from "../constants/statusCodes.js";
import { BookedCar, Car, Tenant, User } from "../models/index.js";

export class BookController {
  static async bookCarByUserIdAndCarId(req, res) {
    try {
      const { userId, carId } = req.params;

      if (!(carId && userId))
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No car id or user id provided" });

      const [car, user] = await Promise.all([
        Car.findOne({ where: { id: carId } }),
        User.findOne({ where: { id: userId } }),
      ]);

      if (!car || !user) {
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error" });
      }

      car.amountOfBooking += 1;

      await car.save();

      const [bookedCar, tenant] = await Promise.all([
        BookedCar.create({ ...car }),
        Tenant.create({ ...user }),
      ]);

      // console.log({ userId: user.id, bookedCarId: car.id });

      await Promise.all([
        BookedCar.update({ carId: car.id }, { where: { id: bookedCar.id } }),
        Tenant.update(
          { userId: user.id, bookedCarId: bookedCar.id },
          { where: { id: tenant.id } }
        ),
      ]);

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
