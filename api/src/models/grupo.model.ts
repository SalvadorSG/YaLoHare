import mongoose, { Document, Schema } from 'mongoose';

export interface iGrupo extends Document {
  nombre: String;
  idEvento: String;
}

const schema = new Schema(
  {
    nombre: { type: String, require: true },
    idEvento: { type: String, require: true },
  },
  {
    timestamps: true,
  },
);

export const Grupo = mongoose.model<iGrupo>('Grupo', schema);
