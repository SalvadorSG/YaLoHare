import mongoose, { Document, Schema } from 'mongoose';

type tipoCategoria = {
  nombre: String;
  color: String;
};

export interface iEventoFuturo extends Document {
  idEvenFuturo: any;
  nombre: String;
  fecha: String;
  hora: String;
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
