import { Router } from "express";
import userRoutes from "../../modules/Cliente/routes";
import authRoutes from "../../modules/Auth/routes";
import petRoutes from "../../modules/Pet/routes";

const routes = Router();

routes.use(userRoutes);
routes.use(authRoutes);
routes.use(petRoutes);

export default routes;