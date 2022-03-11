import React from 'react';
import { useForm } from 'react-hook-form';
import { addEvento } from '../../lib/api';
import {
  RadioGroup,
  Radio,
  Center,
  FormControl,
  HStack,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  VStack,
  Stack,
  Button,
} from '@chakra-ui/react';

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

// const errorColor = '#ff4d4f';

// const FlexForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const Column = styled.div`
//   display: flex;
//   margin: 10px;
// `;

// const CustomInput = styled.input`
//   width: 200px;
//   height: 50px;
//   padding: 0px 10px;
//   margin: 0 8px;
//   border: 1px solidblack;
//   box-sizing: border-box;
// `;

// const CustomBtn = styled.button`
//   background-color: #555555;
//   border: 2px solid #4caf50;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   cursor: pointer;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   transition-duration: 0.6s;
//   &:hover {
//     background-color: #4caf50; /* Green */
//     color: white;
//   }
//   &::active {
//     background-color: #3e8e41;
//     box-shadow: 0 5px #666;
//     transform: translateY(4px);
//   }
// `;

// const ErrorMessageText = styled.p`
//   font-size: 12px;
//   margin: 4px 8px;
//   color: #ff4d4f;
// `;

export const NuevoEvento = () => {
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
    <Center>
      <Stack maxHeight={1} marginLeft={500} spacing={50}>
        <FormControl id="nombre">
          <FormLabel htmlFor="nombre">Introduce el título del evento</FormLabel>
          <Input
            color={'tomato'}
            placeholder="Cita con X, revisión médica, ..."
            {...register('nombre', { required: true, maxLength: 40 })}
          />
          <FormHelperText>
            No puede contener más de 40 caracteres
          </FormHelperText>
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel
            as="legend"
            {...register('categoria', { required: true })}
            htmlFor="categoria"
          >
            Elige la categoría
          </FormLabel>
          <RadioGroup defaultValue="Médico">
            <HStack spacing="24px">
              <Radio value="Médico">Médico</Radio>
              <Radio value="Trabajo">Trabajo</Radio>
              <Radio value="Personal">Personal</Radio>
              <Radio value="Entretenimiento">Entretenimiento</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <Button onClick={onSubmit} type="submit">
          // Añadir //{' '}
        </Button>
      </Stack>
    </Center>
  );
};

//   return (
//     <div>
//       <FlexForm onSubmit={handleSubmit(onSubmit)}>
//         <Row>
//           <Column>
//             <CustomInput
//               type="text"
//               placeholder="Nombre"
//               {...register('nombre', { required: true, maxLength: 80 })}
//             />

//             <CustomInput
//               name="fecha"
//               type="date"
//               placeholder="Fecha"
//               {...register('fecha', {
//                 valueAsDate: true,
//                 required: true,
//               })}
//             />
//           </Column>

//           <Column>
//             <select {...register('hora', { required: true })}>
//               {hours.map((hour) => {
//                 return <option value={hour}>{hour}</option>;
//               })}
//             </select>
//           </Column>
//           <Column>
//             <select {...register('minutos', { required: true })}>
//               {minutes.map((minute) => {
//                 return <option value={minute}>{minute}</option>;
//               })}
//             </select>
//           </Column>

//           <Column>
//             <select {...register('categoria', { required: true })}>
//               <option value="Trabajo">Trabajo</option>
//               <option value="Médico">Médico</option>
//               <option value="Personal">Personal</option>
//               <option value="Entretenimiento">Entretenimiento</option>
//             </select>
//           </Column>

//           <Column>
//             <select {...register('recordatorio', { required: true })}>
//               <option value="Si">Sí, deseo recordatiorio</option>
//               <option value="No">No, no recordar este evento</option>
//             </select>
//           </Column>
//         </Row>
//         <Row>
//           <Column>
//             <button onClick={onSubmit} type="submit">
//               Añadir
//             </button>
//           </Column>
//         </Row>
//       </FlexForm>
//     </div>
//   );
// };
