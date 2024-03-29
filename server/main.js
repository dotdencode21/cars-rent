import express from "express";
import cors from "cors";
import "./src/config/dev.config.js";

import { dbService } from "./src/services/db.service.js";
import { authRouter } from "./src/routes/auth.route.js";
import { userRouter } from "./src/routes/user.route.js";
import { carRoute } from "./src/routes/car.route.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app
  .use("/api/auth", authRouter)
  .use("/api/users", userRouter)
  .use("/api/cars", carRoute);

const main = () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running on ${PORT} port`);

      try {
        await dbService.authenticate({ logging: false });
        console.log("Connection to database has been established successfully");
        await dbService.sync({ logging: false, force: false });
        console.log("All models were synchronized successfully");
      } catch (e) {
        console.error(e);
      }
    });
  } catch (e) {
    console.error(e);
  }
};
main();
