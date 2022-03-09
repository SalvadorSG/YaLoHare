import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { addEvento } from '../../lib/api';

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const errorColor = '#ff4d4f';

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  margin: 10px;
`;

const CustomInput = styled.input`
  width: 200px;
  height: 50px;
  padding: 0px 10px;
  margin: 0 8px;
  border: 1px solidblack;
  box-sizing: border-box;
`;

const CustomBtn = styled.button`
  background-color: #555555;
  border: 2px solid #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  cursor: pointer;
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

const ErrorMessageText = styled.p`
  font-size: 12px;
  margin: 4px 8px;
  color: #ff4d4f;
`;

const NuevoEvento = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    data.fecha = new Date(data.fecha);
    data.fecha.setHours(data.hora);
    data.fecha.setMinutes(data.minutos);
    console.log(data);
    const evento = await addEvento(data);
    reset();
  });
  console.log(errors);

  return (
    <div className="md:mx-auto md:w-full max-w-xl">
      <div className="bg-emerald-white py-8 px-6 shadow rounded-lg px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label>
                <input
                  placeholder="Evento"
                  type="text"
                  name="evento"
                  className="border-red px-3 py-2 rounded-lg shadow-sm focus:outline-none 
                  focus:border-emerald2 focus:ring-1"
                  {...register('nombre', { required: true, maxLength: 80 })}
                />
              </label>

              <CustomInput
                name="fecha"
                type="date"
                placeholder="Fecha"
                {...register('fecha', {
                  valueAsDate: true,
                  required: true,
                })}
              />
            </div>

            <Column>
              <select {...register('hora', { required: true })}>
                {hours.map((hour) => {
                  return <option value={hour}>{hour}</option>;
                })}
              </select>
            </Column>
            <Column>
              <select {...register('minutos', { required: true })}>
                {minutes.map((minute) => {
                  return <option value={minute}>{minute}</option>;
                })}
              </select>
            </Column>

            <Column>
              <select {...register('categoria', { required: true })}>
                <option value="Trabajo">Trabajo</option>
                <option value="Médico">Médico</option>
                <option value="Personal">Personal</option>
                <option value="Entretenimiento">Entretenimiento</option>
              </select>
            </Column>

            <Column>
              <select {...register('recordatorio', { required: true })}>
                <option value="Si">Sí, deseo recordatiorio</option>
                <option value="No">No, no recordar este evento</option>
              </select>
            </Column>
          </div>
          <Row>
            <Column>
              <CustomBtn onClick={onSubmit} type="submit">
                Añadir
              </CustomBtn>
            </Column>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default NuevoEvento;
