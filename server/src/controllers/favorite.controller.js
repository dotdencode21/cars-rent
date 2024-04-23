import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car, FavoriteCar, User } from "../models/index.js";

export class FavoriteController {
  static async updateFavoriteStatusByUserIdAndCarId(req, res) {
    try {
      const { userId, carId } = req.params;
      const { isFavorite } = req.body;

      const [car, user] = await Promise.all([
        Car.findByPk(carId),
        User.findByPk(userId),
      ]);

      if (!user || !car) {
        return res
          .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
          .json({ message: "Internal Server Error" });
      }

      car.isFavorite = isFavorite;

      await car.save();

      if (isFavorite) {
        const favoriteCar = await FavoriteCar.create({ userId, carId });

        await user.addFavoriteCars([favoriteCar]);

        return res
          .status(STATUS_CODE.OK)
          .json({ message: "Car successfully added to favorites" });
      }

      await FavoriteCar.destroy({ where: { userId, carId } });

      return res
        .status(STATUS_CODE.OK)
        .json({ message: "Car successfully removed from favorites" });
    } catch (error) {
      console.error("Error adding favorite car:", error);
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error" });
    }
  }
}
