import React from 'react';
import styled from 'styled-components';

interface TarjetaProps {
    nombre: String;
    fecha: Date;
    recordatorio: Boolean;
  }

  const Columnas = styled.div`
  display: flex;
  float: left;
  margin: 30px;
  `
  const TipoTarjeta = styled.div`
  border: 1px solid green;
  padding: 20px;
  column-count: 1;
  width: 100px;
  height: 200px;
  `;



export const Tarjeta = ({ nombre, fecha}) => {
  return (
      <Columnas>
      <TipoTarjeta>
    <div>
      <div>{nombre}</div>
      <div>{fecha}</div>
      <a href="#">Eliminar</a>
    </div>
    </TipoTarjeta>
    </Columnas>
  );
};
