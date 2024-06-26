import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";

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
    locationType: {
      type: DataTypes.STRING(15),
      allowNull: true,
      field: "location_type",
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
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("admin", "common"),
      defaultValue: "common",
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: "is_admin",
    },
  },
  { tableName: "users", updatedAt: false }
);

export { User };
