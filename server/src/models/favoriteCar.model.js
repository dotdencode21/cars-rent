import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";

const FavoriteCar = dbService.define(
  "FavoriteCar",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: "user_id",
    },
    carId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: "car_id",
    },
  },
  { tableName: "favorite_cars", updatedAt: false }
);

export { FavoriteCar };
