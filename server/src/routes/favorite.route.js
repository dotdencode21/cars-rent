import { Router } from "express";
import { FavoriteController } from "../controllers/favorite.controller.js";

const favoriteRouter = new Router();

favoriteRouter.post("/:carId", FavoriteController.updateFavoriteStatusByCarId);

export { favoriteRouter };
