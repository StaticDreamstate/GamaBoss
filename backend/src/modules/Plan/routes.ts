import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.get("/listar-plano/:id", controller.getPlans )
routes.post("/novo-plano/:id/", controller.createPlan );
routes.put("/atualizar-plano/:id", controller.editPlan );

export default routes;