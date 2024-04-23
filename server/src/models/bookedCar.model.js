import { DataTypes } from "sequelize";
import { dbService } from "../services/db.service.js";
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
      field: "car_id",
    },
  },
  { tableName: "booked_cars", updatedAt: false }
);

export { BookedCar };
