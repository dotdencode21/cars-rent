import { Router } from "express";
import { RatingController } from "../controllers/rating.controller.js";

const ratingRouter = new Router();

ratingRouter.post("/:carId", RatingController.updateRatingByCarId);

export { ratingRouter };
