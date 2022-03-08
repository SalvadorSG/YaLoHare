import mongoose from 'mongoose';
import { DB_URL } from '../config';
import { Evento } from '../models/evento.model';
import { Categoria } from '../models/categoria.model';
import { DateTime } from 'luxon';

const crearEvento = async () => {
  const catTrabajo = await Categoria.create({
    nombre: 'Trabajo',
    color: 'Azul',
  });
  console.log(`✔ Evento ${catTrabajo.nombre} creado`);

  const catMedico = await Categoria.create({
    nombre: 'Médico',
    color: 'Rojo',
  });
  console.log(`✔ Evento ${catMedico.nombre} creado`);

  const catPersonal = await Categoria.create({
    nombre: 'Personal',
    color: 'Amarillo',
  });
  console.log(`✔ Evento ${catPersonal.nombre} creado`);

  const catEntreten = await Categoria.create({
    nombre: 'Entretenimiento',
    color: 'Verde',
  });
  console.log(`✔ Evento ${catEntreten.nombre} creado`);

  const eventoUno = await Evento.create({
    nombre: 'Cita con el dentista',
    fecha: DateTime.fromISO('2022-10-25T09:08:34.123'),
    categoria: catMedico._id,
    recordatorio: true,
  });

  console.log(`✅ Evento creado`);

  const eventoDos = await Evento.create({
    nombre: 'Informe para Uruguay',
    fecha: DateTime.fromISO('2022-10-22T09:08:34.123'),
    categoria: catTrabajo._id,
    recordatorio: false,
  });

  console.log(`✅ Evento creado`);
};

(async () => {
  await mongoose
    .connect(DB_URL)
    .then(() => console.log(`📦 Conected to ${DB_URL}`));

  try {
    await Categoria.collection.drop();
    await Evento.collection.drop();
  } catch (error) {
    console.log('There are no items to drop from db');
  }

  await crearEvento();

  await mongoose.disconnect().then(() => console.log('bye'));
})();
