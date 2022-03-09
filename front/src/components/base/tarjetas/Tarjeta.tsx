import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteEvento } from '../../../lib/api';

interface TarjetaProps {
  nombre: String;
  fecha: Date;
  recordatorio: Boolean;
}

const Columnas = styled.div`
  display: flex;
  float: left;
  margin: 30px;
`;
const TipoTarjeta = styled.div`
  border: 1px solid green;
  padding: 20px;
  column-count: 1;
  line-height : 15px;
  width: 150px;
  height: 300px;
  background-color: lightgreen;
`;

const Elemento = styled.div`
margin: 15px;
`

const CustomBtn = styled.button`
  background-color: white;
  border: 2px solid #4caf50;
  color: black;
  padding: 1px 3px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.6s;
  &:hover {
    background-color: #4caf50; /* Green */
    color: white;
  }
  &::active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Tarjeta = ({ nombre, fecha, _id }) => {
  const [fechaFormateada, setFechaFormateada] = useState('');
  const [horaFormateada, setHoraFormateada] = useState('');

  useEffect(() => {
    const date = new Date(fecha)
    setFechaFormateada(date.toLocaleDateString('es-ES'));
    setHoraFormateada(`${date.getHours()}:${date.getMinutes()}`);
  });



  const deleteEvent = (_id) => {
    console.log('id de tarjeta', _id);
    deleteEvento(_id);
  };
  return (
    <Columnas>
      <TipoTarjeta>
        <div>
          <Elemento>
          <div>{nombre}</div>
          </Elemento>
          <Elemento>
          <div>{fechaFormateada}</div>
          </Elemento>
          <Elemento>
          <div>{horaFormateada}</div>
          </Elemento>
          <CustomBtn onClick={() => deleteEvent(_id)} >Eliminar </CustomBtn>
        </div>
      </TipoTarjeta>
    </Columnas>
  );
};
