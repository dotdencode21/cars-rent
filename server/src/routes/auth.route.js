import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const authRouter = new Router();

authRouter
  .post("/sign-in", AuthController.signIn)
  .post("/sign-up", AuthController.signUp)

export { authRouter };