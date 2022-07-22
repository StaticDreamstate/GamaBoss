import { Router } from "express";
import userRoutes from "../../modules/Cliente/routes";

const routes = Router();
routes.use(userRoutes);

export default routes;