import { Request, Response } from "express";
import Image from "../../models/Images";
import Client from "../../models/Clients";
import path from "path";
import logger from "../../infra/logger";
import bcrypt from "bcryptjs";

const controller = {

  start(req: Request, res: Response) {
    return res.status(200).json("API em execução.");
  },

  async createClient(req: Request, res: Response) {
    try {
      const hash = bcrypt.hashSync(req.body.senha, 10);
      const { nome, email, senha, telefone, whatsapp } = req.body;
      const { file } = req;

      const savedClient = await Client.count({
        email,
      });

      if (savedClient) {
        logger.warn(`[createClient] Tentativa repetida de cadastro: ${req.socket.remoteAddress}`);
        return res.status(400).json("Email já cadastrado no banco");
      }

      const image = await Image.create({
        link: `${path.resolve("uploads", "images")}${file?.filename}`,
        nome: file?.filename,
      });

      const newClient = await Client.create({
        ...req.body,
        senha: hash,
        images: [image._id],
      });

      logger.info(`[createClient] Cliente cadastrado: ${req.socket.remoteAddress}`);
      return res.status(201).json(newClient);
    } catch (error) {
      logger.error(`[createClient] Erro de cadastro do cliente: ${error} - ${req.socket.remoteAddress}`);
      return res.status(500).json(`${error}`);
    }
  },

}

export default controller;
