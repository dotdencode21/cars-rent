import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";
import { Car } from "./car.model.js";

const FavoriteCar = dbService.define(
  "FavoriteCar",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
    },
    carId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Car,
        key: "id",
      },
      field: "car_id",
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      field: "user_id",
    },
  },
  { tableName: "favorite_cars", updatedAt: false }
);

export { FavoriteCar };
