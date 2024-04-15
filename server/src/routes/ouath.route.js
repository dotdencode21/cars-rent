import { Router } from "express";
import { OAuthController } from "../controllers/oauth.controller.js";

const oauthRouter = new Router();

oauthRouter.get("/facebook", OAuthController.oauthViaFacebook);

export { oauthRouter };
