import {
  Flex,
  Select,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  VStack,
  InputRightElement,
  RadioGroup,
  Stack,
  Button,
  Radio,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { addEvento } from '../../lib/api';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

export const FormDeEvento = () => {
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
    <Flex
      onSubmit={handleSubmit(onSubmit)}
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Nuevo evento
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Rellena los datos del acontecimiento que quieres recordar
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={20}>
            <VStack>
              <Box>
                <FormControl id="nombre" isRequired>
                  <FormLabel>Título</FormLabel>
                  <Input
                    type="text"
                    {...register('nombre', { required: true, maxLength: 40 })}
                  />
                </FormControl>
              </Box>
              <FormControl id="categoria" isRequired>
                <FormLabel>Categoría</FormLabel>
                <Select {...register('categoria', { required: true })}>
                  <option value="Trabajo">Trabajo</option>
                  <option value="Médico">Médico</option>
                  <option value="Personal">Personal</option>
                  <option value="Entretenimiento">Entretenimiento</option>
                </Select>
              </FormControl>
            </VStack>

            <Input
              type="date"
              name="fecha"
              placeholder="Fecha"
              {...register('fecha', {
                valueAsDate: true,
                required: true,
              })}
            ></Input>

            <HStack>
              <FormControl id="hora" isRequired>
                <FormLabel>Hora</FormLabel>
                <Select {...register('hora', { required: true })}>
                  {hours.map((hour) => {
                    return <option value={hour}>{hour}</option>;
                  })}
                </Select>
              </FormControl>

              <FormControl id="minutos" isRequired>
                <FormLabel>Minuto</FormLabel>
                <Select {...register('minutos', { required: true })}>
                  {minutes.map((minute) => {
                    return <option value={minute}>{minute}</option>;
                  })}
                </Select>
              </FormControl>
            </HStack>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={onSubmit}
                type="submit"
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Añadir evento
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
