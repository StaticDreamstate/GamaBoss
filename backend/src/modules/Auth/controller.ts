import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import Client from "../../models/Clients";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import logger from "../../infra/logger";
import ENV from "../../infra/config/env";

const controller = {
  
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    console.log(email);

     const savedClient = await Client.findOne({
      email: email
    });

    console.log(savedClient);

    if (!savedClient) {
      logger.warn(`[login] Email não cadastrado: client_ip=${req.socket.remoteAddress}`);
      return res.status(400).json("Email não cadastrado no banco");
    }

    const validPass = bcrypt.compareSync(senha, savedClient.senha);
    if (!validPass) {
      logger.error(`[login] Erro de login: client_ip=${req.socket.remoteAddress}`);
      return res.status(401).json("Email ou senha inválidos.");
    }

    const token = jwt.sign(
      {
        id: savedClient._id,
        email: savedClient.email,
        nome: savedClient.nome,
        // nivel: targetUser.nivel,
      },
      ENV.KEY,
    );

    return res.json(token);
  },
};

export default controller;
