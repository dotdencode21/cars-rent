import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";

const Car = dbService.define(
  "Car",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
      primaryKey: true,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(60),
    },
    type: {
      type: DataTypes.STRING(30),
    },
    pricePerHour: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    brand: {
      type: DataTypes.STRING(20),
    },
    fuel: {
      type: DataTypes.STRING(30),
    },
    isFavorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: "is_favorite",
    },
    amountOfBooking: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      field: "amount_of_booking",
    },
    gearboxType: {
      type: DataTypes.ENUM("Automatic", "Mechanics"),
      defaultValue: "Mechanics",
      field: "gearbox_type",
    },
    rating: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [1],
    },
  },
  { tableName: "cars", updatedAt: false }
);

export { Car };
