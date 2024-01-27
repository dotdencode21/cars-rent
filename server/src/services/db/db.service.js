import { Sequelize } from "sequelize";
import "../../config/dev.config.js";


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


