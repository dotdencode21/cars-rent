import { User } from "./user.model.js";
import { Car } from "./car.model.js";

User.belongsTo(Car, { foreignKey: "carId", as: "bookedCar" });
Car.belongsTo(User, { foreignKey: "userId", as: "tenant" });

export { User, Car };