import { Schema, model } from "mongoose";
import { IImages } from "./Images";

export interface IClient {
    nome: string;
    email: string;
    senha: string;
    telefone?: string;
    whatsapp?: string;
    images?: Schema.Types.ObjectId[] | IImages[];
}

const clientSchema = new Schema<IClient>(
    {
        nome: {
            type: Schema.Types.String,
          },
          email: {
            type: Schema.Types.String,
          },
          senha: {
            type: Schema.Types.String,
          },
          telefone: {
            type: Schema.Types.String,
          },
          whatsapp: {
            type: Schema.Types.String,
          },
          images: [
            {
              type: Schema.Types.ObjectId,
              ref: "Images",
            },
          ],
    },
    { timestamps: true }
);

export default model<IClient>("Clientes", clientSchema);