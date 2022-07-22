import { Router } from "express";
import controller from "./controller";
import imgUpload from "../../infra/middlewares/imgUpload";

const routes = Router();

routes.post("/cadastro", imgUpload.single("avatar"), controller.createClient);

export default routes;