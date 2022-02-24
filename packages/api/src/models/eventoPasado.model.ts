import mongoose, { Document, Schema } from 'mongoose';

type tipoCategoria = {
  nombre: String;
  color: String;
};

export interface iEventoPasado extends Document {
  idEvenPasado: any;
  nombre: String;
  fecha: String;
  hora: String;
  categoria: tipoCategoria;
}

const schema = new Schema({
  nombre: { type: String, require: true },
  fecha: { type: String, require: true },
  hora: { type: String, require: true },
  categoria: { type: String, require: true },
});

export const EventoPasado = mongoose.model<iEventoPasado>(
  'EventoPasado',
  schema,
);
