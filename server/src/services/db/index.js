import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbDialect: process.env.DB_DIALECT,
};

export const dbService = new Sequelize(dbConfig.dbName, dbConfig.dbUsername, dbConfig.dbPassword, {
  host: dbConfig.dbHost,
  dialect: dbConfig.dbDialect
});


