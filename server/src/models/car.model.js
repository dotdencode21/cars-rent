import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";

const Car = dbService.define("Car", {
  carId: {
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
    type: DataTypes.STRING(60)
  },
  type: {
    type: DataTypes.STRING(30)
  },
  price: {
    type: DataTypes.INTEGER,
    validate: {
      isInt: true
    }
  },
  brand: {
    type: DataTypes.STRING(20)
  },
  fuel: {
    type: DataTypes.STRING(30)
  },
  isFavorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  isBooked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, { tableName: "cars", updatedAt: false });

export { Car };