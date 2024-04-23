import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car } from "../models/index.js";

export class CarController {
  static async getCars(req, res) {
    const isFilters = req.query && Object.keys(req.query).length;

    try {
      const cars = await Car.findAll({
        // include: [{ model: BookedCar, as: "bookedCar" }],
        // where: {
        //   brand: isFilters && req.query.brand,
        //   fuel: isFilters && req.query.fuel,
        //   gearboxType: isFilters && req.query.gearboxType,
        //   type: isFilters && req.query.bodyType,
        //   isBooked: isFilters && !!req.query.isBooked,
        //   price: {
        //     [Op.between]: isFilters &&
        //       !!req.query.minPrice &&
        //       !!req.query.maxPrice && [
        //         +req.query.minPrice,
        //         +req.query.maxPrice,
        //       ],
        //   },
        //   amountOfBooking: {
        //     [isFilters && req.query.amountOfBooking === "moreThanTen"
        //       ? Op.gt
        //       : Op.between]:
        //       req.query.amountOfBooking === "moreThanTen"
        //         ? 10
        //         : (req.query.amountOfBooking === "oneToFive" && [1, 5]) ||
        //           (req.query.amountOfBooking === "fiveToTen" && [5, 10]),
        //   },
        // },
      });

      return res.status(STATUS_CODE.OK).json({
        cars,
        // cars: cars
        //   .map((car) => ({
        //     ...car,
        //     rating: Math.round(
        //       car.rating.reduce((accum, item) => accum + item, 0) /
        //         car.rating.length
        //     ),
        //   }))
        //   .filter((car) => {
        //     return isFilters && req.query.rating
        //       ? car.rating <= +(req.query.rating + 0.99) &&
        //           car.rating >= +req.query.rating
        //       : car;
        //   }),
      });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }

  static async getCarById(req, res) {
    const { carId } = req.params;

    if (!carId)
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ message: "No car id provided" });

    try {
      const car = await Car.findOne({
        where: { id: carId },
      });

      if (!car) {
        return res
          .status(STATUS_CODE.NOT_FOUND)
          .json({ message: `Car with ${carId} not found` });
      }

      return res.status(STATUS_CODE.OK).json({ car });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }

  static async createCar(req, res) {
    try {
      const isEmptyData = !Object.keys(req.body).length;

      if (isEmptyData) {
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No data provided" });
      }

      const car = await Car.create({ ...req.body });

      const { carId, ...rest } = car.dataValues;

      return res.status(STATUS_CODE.CREATED).json({ car: rest });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }

  static async updateCarById(req, res) {
    const { carId } = req.params;

    try {
      if (!carId)
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No car id provided" });

      const [_, updatedCar] = await Car.update(
        { ...req.body },
        {
          where: { id: carId },
          returning: true,
        }
      );

      if (!updatedCar.length)
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error" });

      return res.status(STATUS_CODE.OK).json({ car: updatedCar });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }

  static async deleteCarById(req, res) {
    const { carId } = req.params;

    try {
      if (!carId)
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No car id provided" });

      await Car.destroy({ where: { id: carId } }).then(() => {
        return res.json({
          message: `Car with id ${carId} successfully deleted`,
        });
      });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
