import React from 'react';
import NuevoEvento from '../components/form/nuevoEvento';
import { Navbar } from '../components/base/Navbar';
import { ListaDeEventos } from '../components/base/tarjetas/ListaDeEventos';

const crearEvento = () => (
  <div>
    <Navbar />
    <h1>Añade un nuevo evento</h1>
    <NuevoEvento />
  </div>
);

export default crearEvento;
