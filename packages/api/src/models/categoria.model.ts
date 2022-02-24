import mongoose, { Document, Schema } from 'mongoose';

export interface iCategoria extends Document {
  nombre: String;
  color: String;
}

const schema = new Schema({
  nombre: { type: String, require: true },
  color: { type: String, require: true },
});

export const Categoria = mongoose.model<iCategoria>('Categoria', schema);
