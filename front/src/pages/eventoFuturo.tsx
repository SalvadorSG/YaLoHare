import React from 'react';
import {Navbar} from '../components/base/Navbar';
import { ListaDeEventos } from '../components/base/tarjetas/ListaDeEventos';

const eventoFuturo = () => (
  <div>
    <Navbar/>
    <h2>Tus eventos futuros</h2>
<ListaDeEventos />
  </div>
);

export default eventoFuturo;