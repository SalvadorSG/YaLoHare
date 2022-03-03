import React from 'react';
import NuevoEvento from '../components/form/nuevoEvento';
import { Navbar } from '../components/Navbar';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Fecha } from '../components/DiayHora';

const crearEvento = () => (
  <div>
    <Navbar />
    <h2>Añade un nuevo evento</h2>
    <p>
      Aquí tendremos el calendario que nos permitirá añadir los nuevos eventos
    </p>
    {/* <NuevoEvento /> */}

    <MuiPickersUtilsProvider utils={DateFnsUtils}>
<Fecha/>
    </MuiPickersUtilsProvider>
  </div>
);

export default crearEvento;
