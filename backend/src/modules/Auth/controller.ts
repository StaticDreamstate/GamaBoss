import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import Client from "../../models/Clients";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import logger from "../../infra/logger";
import ENV from "../../infra/config/env";

const controller = {

  async login(req: Request, res: Response) {

    try {
    const { email, senha } = req.body;

    const savedClient = await Client.findOne({
      email: email
    });

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
      },
      ENV.KEY,
    );

    return res.status(200).json(token);
    } catch(error) {
      logger.error(`[login] Erro: ${error} - ${req.socket.remoteAddress}`);
      return res.status(500).json(`${error}`);
    }
  },

  async gerarNovoHash(req: Request, res: Response) {
    try {
    logger.info(`[reset] Requisição de reset de senha: ${req.socket.remoteAddress}`);

    const { email } = req.body;

    const savedClient = await Client.findOne({
      email: email
    });

    if (!savedClient) {
      logger.error(`[reset] Usuário não encontrado: ${req.socket.remoteAddress}`);
      return res.status(404).json("Email não encontrado");
    }

    logger.info(`[reset] Usuário = ${JSON.stringify(savedClient.email)} : ${req.socket.remoteAddress}`);

    const token = CryptoJS.AES.encrypt(
      `${savedClient.email}`,
      ENV.KEY,
    ).toString();

    savedClient.hashReset = token;

    await savedClient.save();
    logger.info(`[reset] Hash gerado: ${req.socket.remoteAddress}`);
    return res.status(200).json(token);
    } catch(error) {
      logger.error(`[reset] Erro: ${error} - ${req.socket.remoteAddress}`);
      return res.status(500).json(`${error}`);
    }
  },

  async recuperarSenha(req: Request, res: Response) {
    try {
    logger.info(
      `[recuperarSenha] Recuperação de senha em progresso: ${req.socket.remoteAddress}`
    );
    const { token, senha } = req.body;

    const bytes = CryptoJS.AES.decrypt(token, ENV.KEY);
    const email = bytes.toString(CryptoJS.enc.Utf8);

    if (!email) {
      logger.error(`[recuperarSenha] Token inválido - Email não existe:  ${req.socket.remoteAddress}`);
      return res.status(400).json("token invalido");
    }

    const savedClient = await Client.findOne({
      email: email
    });


    if (!savedClient) {
      logger.error(`[recuperarSenha] Email não encontrado email= ${email} - ${req.socket.remoteAddress}`);
      return res.status(404).json("Email não encontrado");
    }

    if (!savedClient.hashReset || savedClient.hashReset !== token) {
      logger.error(
        `[recuperarSenha] Token diferente/Inexistente no banco de dados - ${req.socket.remoteAddress}`
      );
      return res.status(400).json("token invalido");
    }

    if (bcrypt.compareSync(senha, savedClient.senha)) {
      logger.error(
        `[recuperarSenha] Tentativa de mudança com a mesma senha - ${req.socket.remoteAddress}`
      );
      return res.status(400).json("Senha ja utilizada");
    }

    const newSenha = bcrypt.hashSync(senha, 10);

    savedClient.senha = newSenha;

    savedClient.hashReset = null;

    await savedClient.save();
    logger.info(`[recuperarSenha] Senha alterada: ${req.socket.remoteAddress}`);

    return res.sendStatus(201);
  } catch(error) {
    logger.error(`[recuperarSenha] Erro: ${error} - ${req.socket.remoteAddress}`);
    return res.status(500).json(`${error}`);
  }
}
};

export default controller;
