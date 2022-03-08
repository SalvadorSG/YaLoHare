import mongoose, { Document, Schema } from 'mongoose';

export interface iUsuario extends Document {
  idAuth: String;
  idGrupo: String;
}

const schema = new Schema({
  idAuth: { type: String, require: true },
  idGrupo: { type: String, require: false },
});

export const Usuario = mongoose.model<iUsuario>('Usuario', schema);
