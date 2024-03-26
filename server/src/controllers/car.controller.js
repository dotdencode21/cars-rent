import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car, User } from "../models/index.js"

export class CarController {
  static async getCars(req, res) {
    try {
      const cars = await Car.findAll({ 
        include: [{ model: User, as: "tenant" }],
        attributes: {
          exclude: ["userId"]
        }
      });
      return res.status(STATUS_CODE.OK).json({ cars });
    } catch (e) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error", error: e })
    }
  }

  static async getCarById(req, res) {
    const { carId } = req.params;

    if (!carId) return res.status(STATUS_CODE.BAD_REQUEST).json({ message: "No car id provided" });

    try {
      const car = await Car.findOne({ 
        where: { carId },
        attributes: {
          exclude: ["userId"]
        }
      });

      if (!car) {
        return res
          .status(STATUS_CODE.NOT_FOUND)
          .json({ message: `Car with ${carId} not found` });
      }

      return res.status(STATUS_CODE.OK).json({ car });
    } catch (e) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error", error: e })
    }
  }

  static async createCar(req, res) {
    try {
      const isEmptyData = !Object.keys(req.body).length;

      if (isEmptyData) {
        return res.status(STATUS_CODE.BAD_REQUEST).json({ message: "No data provided" });
      }

      const { img, name, type, price, brand, fuel } = req.body;

      const car = await Car.create({ img, name, type, price, brand, fuel });

      return res.status(STATUS_CODE.CREATED).json({ car });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e })
    }
  }

  static async updateCarById(req, res) {
    const { carId } = req.params;

    try {
      if (!carId) return res.status(STATUS_CODE.BAD_REQUEST).json({ message: "No car id provided" });

      await Car.update(
        { ...req.body }, 
        { 
          where: { carId }, 
          returning: true
        } 
      ).then(data => {
        const [_, updatedCar] = data;
        return res.status(STATUS_CODE.OK).json({ car: updatedCar });
      });
    } catch (e) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error", error: e })
    }
  }

  static async deleteCarById(req, res) {
    const { carId } = req.params;

    try {
      if (!carId) return res.status(STATUS_CODE.BAD_REQUEST).json({ message: "No car id provided" });
  
      await Car.destroy({ where: { carId } }).then(() => {
        return res.json({ message: `Car with id ${carId} successfully deleted` });
      });
    } catch (e) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error", error: e })
    }
  }

  static async bookCarById(req, res) {
    try {
      const { carId, userId } = req.params;

      if (!(carId && userId)) return res.status(STATUS_CODE.BAD_REQUEST).json({ message: "No car id or user id provided" });

      await Car.update(
        { isBooked: true, userId },
        { 
          where: { carId }, 
          returning: true 
        }
      ).then(data => {
        const [_, updatedCar] = data;
        return res.status(STATUS_CODE.OK).json({ car: updatedCar });
      });
    } catch (e) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Internal Server Error", error: e })
    }
  }
};