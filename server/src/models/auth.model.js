import { DataTypes } from "sequelize"
import { dbService } from "../services/db/db.service"

export const User = dbService.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(60),
    unique: true,
  },
  password: {
    type: DataTypes.TEXT("long"),
  }
}, { tableName: "Users" });