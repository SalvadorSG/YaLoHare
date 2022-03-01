import mongoose, { Document, Schema } from 'mongoose';

export interface iCategoria extends Document {
  nombre: String;
  color: String;
}

const schema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
      unique: true,
      enum: {
        values: ['Trabajo', 'Médico', 'Personal', 'Entretenimiento'],
        message: '{VALUE} no es una de las categorías',
      },
    },
    color: {
      type: String,
      require: true,
      unique: true,
      enum: {
        values: ['Azul', 'Rojo', 'Amarillo', 'Verde'],
        message: '{VALUE} no se puede seleccionar como color',
      },
    },
  },
  {
    timestamps: true,
  },
);

export const Categoria = mongoose.model<iCategoria>('Categoria', schema);
