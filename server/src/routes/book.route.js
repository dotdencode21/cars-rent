import { Router } from "express";
import { BookController } from "../controllers/book.controller.js";

const bookRouter = new Router();

bookRouter
  .put("/:userId/:carId", BookController.bookCarByUserIdAndCarId);

export { bookRouter };