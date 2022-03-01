import mongoose, { Document, Schema } from 'mongoose';
import { iCategoria } from './categoria.model';

export interface iEvento extends Document {
  idUsuario: String;
  idGrupo: String;
  nombre: String;
  fecha: Date;
  categoria: iCategoria['_id'];
  recordatorio: Boolean;
}

const schema = new Schema(
  {
    idUsuario: { type: String, require: true },
    idGrupo: { type: String, require: false },
    nombre: { type: String, require: true },
    date: { type: Date, require: true },
    categoria: { type: Schema.Types.ObjectId, require: true, ref: 'Categoria' },
    recordatorio: { type: Boolean, require: false },
  },
  { timestamps: true },
);

export const Evento = mongoose.model<iEvento>('Evento', schema);
