import { Associations } from "./associations.model.js";
import { User } from "./user.model.js";
import { Car } from "./car.model.js";
import { FavoriteCar } from "./favoriteCar.model.js";
import { BookedCar } from "./bookedCar.model.js";

User.hasMany(FavoriteCar, { foreignKey: "favoriteCarId", as: "favoriteCars" });
FavoriteCar.belongsTo(User, {
  foreignKey: "favoriteCarId",
  as: "favoriteCars",
});

User.belongsTo(BookedCar, {
  foreignKey: "bookedCarId",
  as: "bookedCar",
});

Associations.hasMany(User, { foreignKey: "userId" });
User.belongsTo(Associations, {
  foreignKey: "userId",
});

Associations.hasMany(Car, { foreignKey: "carId" });
Car.belongsTo(Associations, {
  foreignKey: "carId",
});

export { Car, User, BookedCar, Associations, FavoriteCar };
