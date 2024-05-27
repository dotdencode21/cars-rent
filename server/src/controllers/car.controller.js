import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car } from "../models/index.js";

export class CarController {
  static async getCars(req, res) {
    try {
      const cars = await Car.findAll({
        attributes: {
          exclude: ["carId"],
        },
      });

      return res.status(STATUS_CODE.OK).json({
        cars: cars.map((car) => ({
          ...car.dataValues,
          maxRating: Math.round(
            car.rating.reduce((accum, item) => accum + item, 0) /
              car.rating.length
          ),
        })),
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
        attributes: {
          exclude: ["carId"],
        },
      });

      if (!car) {
        return res
          .status(STATUS_CODE.NOT_FOUND)
          .json({ message: `Car with ${carId} not found` });
      }

      return res.status(STATUS_CODE.OK).json({
        car: {
          ...car.dataValues,
          maxRating: Math.round(
            car.rating.reduce((accum, item) => accum + item, 0) /
              car.rating.length
          ),
        },
      });
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
