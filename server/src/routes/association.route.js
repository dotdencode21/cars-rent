import { Router } from "express";
import { AssociationsController } from "../controllers/associations.controller.js";

const associationRouter = new Router();

associationRouter
  .get("/", AssociationsController.getAssociations)
  .post("/create", AssociationsController.createAssociation);

export { associationRouter };
