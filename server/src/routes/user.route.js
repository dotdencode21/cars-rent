import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const userRouter = new Router();

userRouter
  .get("/", UserController.getUsers)
  .get("/:userId", UserController.getUserById)
  .put("/:userId", UserController.updateUserById);

export { userRouter };
