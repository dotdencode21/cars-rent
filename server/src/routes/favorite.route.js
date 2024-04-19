import { Router } from "express";
import { FavoriteController } from "../controllers/favorite.controller.js";

const favoriteRouter = new Router();

favoriteRouter.post(
  "/:userId/:carId",
  FavoriteController.updateFavoriteStatusByUserIdAndCarId
);

export { favoriteRouter };
