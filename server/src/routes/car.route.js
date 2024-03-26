import { Router } from "express";
import { CarController } from "../controllers/car.controller.js";

const carRoute = new Router();

carRoute
  .get("/", CarController.getCars)
  .get("/:carId", CarController.getCarById)
  .post("/create", CarController.createCar)
  .put("/:carId", CarController.updateCarById)
  .delete("/:carId", CarController.deleteCarById)
  .put("/:userId/book/:carId", CarController.bookCarById);

export { carRoute };