import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";
import { Car } from "./car.model.js";

const User = dbService.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(60),
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "last_name",
    },
    color: {
      type: DataTypes.STRING(15),
      allowNull: true,
      get() {
        return `#${Math.floor(Math.random() * 0xffffff)
          .toString(16)
          .padEnd(6, "0")}`;
      },
    },
    fullName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      get() {
        const firstName = this.getDataValue("firstName");
        const lastName = this.getDataValue("lastName");

        return firstName && lastName ? `${firstName} ${lastName}` : "";
      },
      field: "full_name",
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      defaultValue: "male",
    },
    location: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER({ unsigned: true }),
      allowNull: true,
      validate: {
        isInt: true,
      },
    },
    password: {
      type: DataTypes.TEXT("long"),
    },
    role: {
      type: DataTypes.ENUM("admin", "common"),
      defaultValue: "common",
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bookedCarId: {
      type: DataTypes.UUID,
      references: {
        model: Car,
        key: "id",
      },
      field: "booked_car_id",
    },
  },
  { tableName: "users", updatedAt: false }
);

export { User };
