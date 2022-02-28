import mongoose, { Document, Schema } from 'mongoose';

export interface iEventoFuturo extends Document {
  idUsuario: 
  nombre: String;
  date: Date;
  categoria: tipoCategoria;
  recordatorio: Boolean;

}

const schema = new Schema({
  nombre: { type: String, require: true },
  fecha: { type: String, require: true },
  hora: { type: String, require: true },
  categoria: { type: String, require: true },
  recordatorio: { type: Boolean, require: false },
});

export const EventoFuturo = mongoose.model<iEventoFuturo>(
  'EventoFuturo',
  schema,
);
