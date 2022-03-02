import mongoose from 'mongoose';
import { DB_URL } from './config';
import { Evento } from './models/evento.model';
import { Categoria} from './models/categoria.model';

const crearEvento = async () => {
    const catTrabajo = await Categoria.create({
        nombre: 'Trabajo',
        color: 'Azul'
    })
    console.log(`✔ Evento ${catTrabajo.nombre} creado`);

    const catMedico = await Categoria.create({
        nombre: 'Medico',
        color: 'Rojo'
    })
    console.log(`✔ Evento ${catMedico.nombre} creado`);

    const catPersonal = await Categoria.create({
        nombre: 'Personal',
        color: 'Amarillo'
    })
    console.log(`✔ Evento ${catPersonal.nombre} creado`);

    const catEntreten = await Categoria.create({
        nombre: 'Entretenimiento',
        color: 'Verde'
    })
    console.log(`✔ Evento ${catEntreten.nombre} creado`);

    const eventoUno = Evento.create({
        nombre: 'Cita con el dentista',
        fecha: Date,
        categoria: catMedico._id,
        recordatorio: true,
    })

    console.log(`✅ Evento creado`);

    const eventoDos = Evento.create({
        nombre: 'Informe para Uruguay',
        fecha: Date,
        categoria: catTrabajo._id,
        recordatorio: false,
    })

    console.log(`✅ Evento creado`);

    const eventoTres = Evento.create({
        nombre: 'Reunión de ex-alumnos',
        fecha: Date,
        categoria: catPersonal._id,
        recordatorio: false,
    })

    console.log(`✅ Evento creado`);

    const eventoCuatro = Evento.create({
        nombre: 'Terminator 15',
        fecha: Date,
        categoria: catEntreten._id,
        recordatorio: true,
    })
    console.log(`✅ Evento creado`);
}

(async () => {
    await mongoose.connect(DB_URL).then(() => console.log(`📦 Conected to ${DB_URL}`))

    try {
        await Categoria.collection.drop();
        await Evento.collection.drop();
    } catch (error) {
        console.log("There are no items to drop from db")
    };

    await crearEvento();

    await mongoose.disconnect().then(() => console.log("bye"));

})();

