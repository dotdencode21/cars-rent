import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { dbService } from "./src/services/db/index.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const main = () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running on ${PORT} port`);

      try {
        await dbService.authenticate({ logging: false });
        console.log("Connection to database has been established successfully")
      } catch (e) {
        console.error(e);
      }
    });
  } catch (e) {
    console.error(e);
  }
}
main();

