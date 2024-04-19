import { STATUS_CODE } from "../constants/statusCodes.js";
import { Car, FavoriteCar, User } from "../models/index.js";

export class FavoriteController {
  static async updateFavoriteStatusByUserIdAndCarId(req, res) {
    try {
      const { userId, carId } = req.params;
      const { isFavorite } = req.body;

      if (!carId)
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json({ message: "No car id provided" });

      const car = await Car.findByPk(carId);

      if (!car)
        return res
          .status(STATUS_CODE.NOT_FOUND)
          .json({ message: "Car not found" });

      if (isFavorite) {
        console.log({ userId, carId });

        const favoriteCar = await FavoriteCar.create({ userId, carId });

        console.log(favoriteCar);

        if (!favoriteCar) {
          return res
            .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
            .json({ message: "Internal Server Error" });
        }

        await User.update(
          { favoriteCarId: favoriteCar.id },
          { where: { id: userId } }
        );

        return res
          .status(STATUS_CODE.OK)
          .json({ message: "Favorite status updated successfully" });
      }

      await Promise.all([
        FavoriteCar.destroy({ where: { carId } }),
        User.update({ favoriteCarId: null }, { where: { id: userId } }),
      ]);

      return res
        .status(STATUS_CODE.OK)
        .json({ message: "Favorite status updated successfully" });
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal Server Error", error: e });
    }
  }
}
