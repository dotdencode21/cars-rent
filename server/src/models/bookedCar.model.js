import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";
import { Car } from "./car.model.js";
import dayjs from "dayjs";

const BookedCar = dbService.define(
  "BookedCar",
  {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      autoIncrement: false,
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
      defaultValue: 0,
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
    rentStartDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "rent_start_date",
    },
    rentEndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "rent_end_date",
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      get() {
        const pricePerHour = this.getDataValue("pricePerHour");
        const rentStartDate = dayjs(this.getDataValue("rentStartDate"));
        const rentEndDate = dayjs(this.getDataValue("rentEndDate"));

        return rentEndDate.subtract(rentStartDate, "day") * pricePerHour;
      },
      field: "total_price",
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
  { tableName: "booked_cars", updatedAt: false }
);

export { BookedCar };
