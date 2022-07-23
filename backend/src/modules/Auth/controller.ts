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
      logger.warn(`[login] Email não cadastrado: ${req.socket.remoteAddress}`);
      return res.status(400).json("Email não cadastrado no banco");
    }

    const validPass = bcrypt.compareSync(senha, savedClient.senha);
    if (!validPass) {
      logger.error(`[login] Erro de login: ${req.socket.remoteAddress}`);
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

  async reset(req: Request, res: Response) {
    logger.info(`[reset] Requisição de reset de senha: ${req.socket.remoteAddress}`);

    const { email } = req.body;

    const savedClient = await Client.findOne({
      email: email
    });

    if (!savedClient) {
      logger.error(`[reset] Usuário não encontrado: ${req.socket.remoteAddress}`);
      return res.status(404).json("Email não encontrado");
    }

    logger.info("nivel", "mensagem");
    logger.info(`[reset] user = ${JSON.stringify(savedClient)} : ${req.socket.remoteAddress}`);

    const token = CryptoJS.AES.encrypt(
      `${savedClient.email}`,
      ENV.KEY,
    ).toString();

    savedClient.hashReset = token;

    await savedClient.save();
    logger.info(`[reset] finish function`);
    return res.json(token);
  },

  async recover(req: Request, res: Response) {
    logger.info(
      `[recover] start function body = ${JSON.stringify(req.body)}`
    );
    const { token, senha } = req.body;

    const bytes = CryptoJS.AES.decrypt(token, ENV.KEY);
    const email = bytes.toString(CryptoJS.enc.Utf8);

    if (!email) {
      logger.error(`[recover] token invalido, pois não existe o email`);
      return res.status(400).json("token invalido");
    }

    const savedClient = await Client.findOne({
      email: email
    });


    if (!savedClient) {
      logger.error(`[recover] Email não encontrado email= ${email}`);
      return res.status(404).json("Email não encontrado");
    }

    if (!savedClient.hashReset || savedClient.hashReset !== token) {
      logger.error(
        `[recover] Token diferente ou não existe no banco de dados`
      );
      return res.status(400).json("token invalido");
    }

    if (bcrypt.compareSync(senha, savedClient.senha)) {
      return res.status(400).json("Senha ja utilizada");
    }

    const newSenha = bcrypt.hashSync(senha, 10);

    savedClient.senha = newSenha;

    savedClient.hashReset = null;

    await savedClient.save();
    logger.info(`[recover] Senha alterada: ${req.socket.remoteAddress}`);

    return res.sendStatus(201);
  },

};

export default controller;
