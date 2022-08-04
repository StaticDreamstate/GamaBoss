import { Schema, model } from "mongoose";
import { IPets } from "./Pets";

export interface IPlans {
    consultaClinica: boolean;
    vacina: boolean;
    diariaInternacao: boolean;
    emergencia: boolean;
    teleAtendimento: boolean;
    coberturaNacional: boolean;
    consultaDomicilio: boolean;
    procedimentosCirurgicos: boolean;
    pet: Schema.Types.ObjectId[] | IPets[];
}

const plansSchema = new Schema<IPlans>(
    {
        consultaClinica: {
            type: Schema.Types.Boolean,
            required: false,
        },
        vacina: {
            type: Schema.Types.Boolean,
            required: false,
        },
        diariaInternacao: {
            type: Schema.Types.Boolean,
            required: false,
        },
        emergencia: {
            type: Schema.Types.Boolean,
            required: false,
        },
        teleAtendimento: {
            type: Schema.Types.Boolean,
            required: false,
        },
        coberturaNacional: {
            type: Schema.Types.Boolean,
            required: false,
        },
        consultaDomicilio: {
            type: Schema.Types.Boolean,
            required: false,
        },
        procedimentosCirurgicos: {
            type: Schema.Types.Boolean,
            required: false,
        },
        pet:[
             {
            type: Schema.Types.ObjectId,
            ref: "Pets",
          }
        ],
        
    },
    { timestamps: true }
)

export default model<IPlans>("Plans", plansSchema);








