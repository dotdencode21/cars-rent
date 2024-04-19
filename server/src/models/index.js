import { Associations } from "./associations.model.js";
import { User } from "./user.model.js";
import { Car } from "./car.model.js";
import { FavoriteCar } from "./favoriteCar.model.js";
import { BookedCar } from "./bookedCar.model.js";

BookedCar.hasOne(User, { foreignKey: "bookedCarId", as: "bookedCar" });
User.belongsTo(BookedCar, { foreignKey: "bookedCarId", as: "bookedCar" });

FavoriteCar.hasMany(User, { foreignKey: "favoriteCarId", as: "favoriteCars" });
User.belongsTo(FavoriteCar, {
  foreignKey: "favoriteCarId",
  as: "favoriteCars",
});

export { Car, User, BookedCar, Associations, FavoriteCar };
