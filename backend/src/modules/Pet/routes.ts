import { Router } from "express";
import controller from "./controller";
import imgUpload from "../../infra/middlewares/imgUpload";

const routes = Router();

routes.post("/cadastrar-pet", imgUpload.single("avatar"), controller.createPet);
routes.get("/listar-pets/:dono", controller.getPets);
routes.get("/listar-pet/:id", controller.getPetById);
routes.put("/editar-pet/:dono/:id", imgUpload.single("avatar"), controller.editPet);
routes.delete("/deletar-pet/:id", controller.deletePet);

export default routes;