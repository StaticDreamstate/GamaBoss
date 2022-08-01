import { Request, Response } from "express";
import Image from "../../models/Images";
import Pet from "../../models/Pets"
import path from "path";
import logger from "../../infra/logger";
import Pets from "../../models/Pets";

const controller = {

    async createPet(req: Request, res: Response) {
        try {
        const { nome, dono, raca, idade, peso } = req.body;
        const { file } = req;

        const savedPet = await Pet.count({
            nome,
            dono,
            raca,
            idade,
            peso,
        });

        if (savedPet) {
            logger.warn(`[createPet]Tentativa repetida de cadastro do pet:${req.socket.remoteAddress}`);
            return res.status(400).json("Pet já cadastrado no banco");
        }

        const image = await Image.create({
            link: `${path.resolve("uploads", "images")}${file?.filename}`,
            nome: file?.filename,
        });

        const newPet = await Pet.create({
            ...req.body,
            images: [image._id],
        });

        logger.info(`[createPet]Pet cadastrado: ${req.socket.remoteAddress}`);
        return res.status(201).json(newPet);
    } catch(error) { 
        logger.error(`[createPet]Erro ao cadastrar pet: ${error}-  ${req.socket.remoteAddress}`);
        return res.status(500).json(`${error}`);
    }
    },

    async getPets(req: Request, res: Response) {
        try {
            const allPets = await Pets.find().sort({ updated_at: -1 });

            return res.status(200).json(allPets);
        } catch (error) {
            logger.error(`[getPets]Erro ao consultar lista: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },

    async getPetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const pet = await Pets.findOne({ _id: id });
            return res.status(200).json(pet);
        } catch (error) {
            logger.error(`[getPetById]Erro ao consultar pet: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },

    async editPet(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nome, dono, raca, idade, peso } = req.body;
            const { file } = req;

            const image = await Image.create({
                link: `${path.resolve("uploads", "images")}${file?.filename}`,
                nome: file?.filename,
            });

            const petUpdate = await Pets.findOneAndUpdate(
                { _id: id },
                {
                    ...req.body,
                    images: [image._id]
                },
                {
                    new: true,
                }
            );
            return res.status(200).json(petUpdate);
        } catch (error) {
            logger.error(`[getPetById]Erro ao atualizar dados do pet: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },

    async deletePet(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await Pets.deleteOne({ _id: id });

            return res.sendStatus(204);
        } catch (error) {
            logger.error(`[deletePet]Erro ao deletar pet do banco: ${error}-  ${req.socket.remoteAddress}`);
            return res.status(500).json(`${error}`);
        }
    },
}

export default controller;