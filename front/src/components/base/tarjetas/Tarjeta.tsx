import React from 'react';
import styled from 'styled-components';

interface TarjetaProps {
    nombre: string;
  }

  const Columnas = styled.div`
  display: flex;
  ;

  `
  const TipoTarjeta = styled.div`
  border: 1px solid green;
  padding: 30px;


  `;



export const Tarjeta = ({ nombre }) => {
  return (
      <Columnas>
      <TipoTarjeta>
    <div>
      <div>{nombre}</div>
    </div>
    </TipoTarjeta>
    </Columnas>
  );
};
