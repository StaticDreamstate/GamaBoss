import { Schema, model } from "mongoose";
import { IImages } from "./Images";
import { IClient } from "./Clients";

export interface IPets {
  nome: string;
  dono: Schema.Types.ObjectId | IClient;
  raca?: string;
  sexo: string;
  idade: string;
  peso: string;
  images?: Schema.Types.ObjectId[] | IImages[];
}

const petSchema = new Schema<IPets>({
  nome: {
    type: Schema.Types.String,
    required: true,
  },
  dono: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  raca: {
    type: Schema.Types.String,
    required: false,
  },
  sexo: {
    type: Schema.Types.String,
    required: false,
  },
  idade: {
    type: Schema.Types.String,
    required: true,
  },
  peso: {
    type: Schema.Types.String,
    required: true,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "Images",
    },
  ],

},
  { timestamps: true },
);

export default model<IPets>("Pets", petSchema);