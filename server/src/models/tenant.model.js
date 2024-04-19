import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";
import { User } from "./user.model.js";
import { BookedCar } from "./bookedCar.model.js";

const Tenant = dbService.define(
  "Tenant",
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
    bookedCarId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: BookedCar,
        key: "id",
      },
      field: "booked_car_id",
    },
  },
  { tableName: "tenants", updatedAt: false }
);

export { Tenant };
