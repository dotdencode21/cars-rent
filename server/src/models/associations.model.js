import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";
import { User } from "./user.model.js";
import { Car } from "./car.model.js";

const Associations = dbService.define(
  "Associations",
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
      references: {
        model: User,
        key: "id",
      },
      field: "user_id",
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
  },
  { tableName: "associations", updatedAt: false }
);

export { Associations };
