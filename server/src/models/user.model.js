import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";

const User = dbService.define("User", {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    email: {
      type: DataTypes.STRING(60),
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
  },
  { tableName: "users", updatedAt: false }
);

export { User };
