import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";

const Associations = dbService.define(
  "Associations",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    locationType: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "location_type",
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "car_type",
    },
  },
  { tableName: "associations", updatedAt: false }
);

export { Associations };
