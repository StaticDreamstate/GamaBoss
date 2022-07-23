import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/login", controller.login);
routes.post("/reset-senha", controller.reset);
routes.post("/recuperar-senha", controller.recover);

export default routes;
