import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/login", controller.login);

export default routes;
