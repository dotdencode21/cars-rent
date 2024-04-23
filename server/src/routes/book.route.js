import { Router } from "express";
import { BookController } from "../controllers/book.controller.js";

const bookRouter = new Router();

bookRouter.post("/:userId/:carId", BookController.bookCarByUserIdAndCarId);

export { bookRouter };
