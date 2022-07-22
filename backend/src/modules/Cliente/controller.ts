import { Request, Response } from "express";
import Image from "../../models/Images";
import Client from "../../models/Clients";
import path from "path";
const controller = {

    async createClient(req: Request, res: Response) {
        const { nome, email, senha, telefone, whatsapp } = req.body;
        const { file } = req;
    
        const savedClient = await Client.count({
          email,
        });
    
        if (savedClient) {
          return res.status(400).json("Email já cadastrado no banco");
        }
    
        const image = await Image.create({
          link: `${path.resolve("uploads","images")}${file?.filename}`,
          nome: file?.filename,
        });
    
        const newClient = await Client.create({
          ...req.body,
          images: [image._id],
        });
    
        return res.status(201).json(newClient);
      },

}

export default controller;
