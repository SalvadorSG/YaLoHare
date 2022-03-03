import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const errorColor = "#ff4d4f";

const FlexForm = styled.form`
  display: flex;
  flex-direction:column ;
  `

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  margin-bottom: 24px;
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
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <h3>Añade tu nuevo evento</h3>

      <FlexForm onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <CustomInput
              type="text"
              placeholder="Nombre"
              {...register("Nombre", { required: true, maxLength: 80 })}
            />
          </Column>
          <Column>
            <select {...register("Dia", { required: true })}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </Column>

          <Column>
            <select {...register("Mes", { required: true })}>
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>
          </Column>

          <Column>
            <select {...register("Categoria", { required: true })}>
              <option value="Trabajo">Trabajo</option>
              <option value="Médico">Médico</option>
              <option value="Personal">Personal</option>
              <option value="Entretenimiento">Entretenimiento</option>
            </select>
          </Column>

          <Column>
            <select {...register("Recordatorio", { required: true })}>
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