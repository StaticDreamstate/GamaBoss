import { Request, Response } from "express";
import Plan from "../../models/Plans";
import Pet from "../../models/Pets"
import logger from "../../infra/logger";

const controller = {
    async getPlans(req: Request, res: Response) {

        try {
            const { id } = req.params;

            const plans = await Plan.findOne({ _id: id });

            if (!plans) {
                logger.error(`[getPlans]Plano não encontrado: ${req.socket.remoteAddress}`);
                return res.status(404).json("Plano não encontrado");
            }

            return res.status(200).json(plans);

        } catch (error) {
            logger.error(`[getPlans]Erro ao verificar os planos: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },

    async createPlan(req: Request, res: Response) {
        try {
            const { consultaClinica, vacina, diariaInternacao, emergencia,
                teleAtendimento, coberturaNacional, consultaDomicilio,
                procedimentosCirurgicos,
            } = req.body;

            const { id } = req.params;

            const pet = await Pet.findById(id);

            if (Object.keys(req.body).length === 0) {
                logger.error(`[createPlan]Corpo vazio: ${req.socket.remoteAddress}`);
                return res.status(400).json("Dados insuficientes para Cadastro");
            }

            if (!pet) {
                logger.error(`[createPlan]Pet não encontrado: ${req.socket.remoteAddress}`);
                return res.status(404).json("Pet não cadastrado");
            }

            const newPlan = await Plan.create(
                {
                    ...req.body,
                    pet: [pet._id]
                },
            );

            return res.status(201).json(newPlan);
        } catch (error) {
            logger.error(`[createPlan]Erro ao criar o plano: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },

    async editPlan(req: Request, res: Response) {
        try {
            const { consultaClinica, vacina, diariaInternacao, emergencia,
                teleAtendimento, coberturaNacional, consultaDomicilio,
                procedimentosCirurgicos,
            } = req.body;

            const { id } = req.params;

            const check = await Plan.findOne({ _id: id });

            if (!check) {
                logger.error(`[editPlan]Plano não encontrado: ${req.socket.remoteAddress}`);
                return res.status(404).json("Plano não encontrado");
            }

            if (Object.keys(req.body).length === 0) {
                logger.error(`[editPlan]Corpo vazio: ${req.socket.remoteAddress}`);
                return res.status(400).json("Dados insuficientes para Atualização");
            }

            const modifyPlan = await Plan.findOneAndUpdate(
                { _id: id },
                {
                    ...req.body,
                },
                {
                    new: true,
                }
            );

            return res.status(201).json(modifyPlan);

        } catch (error) {
            logger.error(`[editPlan]Erro ao editar o plano: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }

    }
}
export default controller;

function id(id: any) {
    throw new Error("Function not implemented.");
}
