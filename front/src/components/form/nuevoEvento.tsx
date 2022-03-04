import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { addEvento } from "../../lib/api";

const errorColor = "#ff4d4f";

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

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
border: 2px solid #4CAF50;
color: white;
padding: 15px 32px;
text-align: center;
cursor: pointer;
text-decoration: none;
display: inline-block;
font-size: 16px;
transition-duration: 0.6s;
&:hover {
    background-color: #4CAF50; /* Green */
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
    console.log(data);
   const evento = await addEvento(data);
    reset();
  });
  console.log(errors);

  return (
    <div>
      <FlexForm onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <CustomInput
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: true, maxLength: 80 })}
            />

<CustomInput
              type="date"
              placeholder="Fecha"
              {...register("fecha", {
                valueAsDate: true, required: true
              })}
            />
          </Column>
          <Column>
            <select {...register("categoria", { required: true })}>
              <option value="Trabajo">Trabajo</option>
              <option value="Médico">Médico</option>
              <option value="Personal">Personal</option>
              <option value="Entretenimiento">Entretenimiento</option>
            </select>
          </Column>

          <Column>
            <select {...register("recordatorio", { required: true })}>
              <option value="Si">Sí, deseo recordatiorio</option>
              <option value="No">No, no recordar este evento</option>

            </select>
          </Column>
       
          </Row>
        <Row>
          <Column>
            <CustomBtn onClick={onSubmit} type="submit" >Añadir</CustomBtn>
          </Column>
        </Row>
      </FlexForm>
    </div>
  );
};

export default NuevoEvento;