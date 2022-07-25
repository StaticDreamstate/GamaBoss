import { Schema, model } from "mongoose";
import { IImages } from "./Images";

export interface IClient {
    nome: string;
    email: string;
    senha: string;
    telefone?: string;
    whatsapp?: string;
    images?: Schema.Types.ObjectId[] | IImages[];
    hashReset?: string | null ;
}

const clientSchema = new Schema<IClient>(
    {
        nome: {
            type: Schema.Types.String,
            required: true,
          },
          email: {
            type: Schema.Types.String,
            required: true,
            unique: true
          },
          senha: {
            type: Schema.Types.String,
            required: true,
          },
          telefone: {
            type: Schema.Types.String,
            required: false,
          },
          whatsapp: {
            type: Schema.Types.String,
            required: false,
          },
          images: [
            {
              type: Schema.Types.ObjectId,
              ref: "Images",
            },
          ],
          hashReset: {
            type: Schema.Types.String,
          },
    },
    { timestamps: true }
);

export default model<IClient>("Clientes", clientSchema);