import { Schema, model } from "mongoose";
import { IClient } from "./Clients";

export interface IImages {
    link: string;
    nome: string;
    cliente: Schema.Types.ObjectId | IClient;
}

const imagesSchema = new Schema<IImages>(
    {
      link: {
        type: Schema.Types.String,
      },
      nome: {
        type: Schema.Types.String,
      },
      cliente: {
        type: Schema.Types.ObjectId,
        ref: "Client",
      },
    },
    { timestamps: true }
  );
  
  export default model<IImages>("Images", imagesSchema);
  