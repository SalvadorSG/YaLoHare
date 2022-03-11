import {
  Box,
  Center,
  Text,
  Stack,
  Flex,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
import { deleteEvento } from '../../../lib/api';
import { type } from 'os';

interface TarjetaProps {
  nombre: String;
  fecha: Date;
  recordatorio: Boolean;
}

export const Tarjeta = ({ nombre, fecha, _id, categoria }) => {
  const [fechaFormateada, setFechaFormateada] = useState('');
  const [horaFormateada, setHoraFormateada] = useState('');

  useEffect(() => {
    const date = new Date(fecha);
    setFechaFormateada(date.toLocaleDateString('es-ES'));
    setHoraFormateada(`${date.getHours()}:${date.getMinutes()}`);
  });

  const deleteEvent = (_id) => {
    console.log('id de tarjeta', _id);
    deleteEvento(_id);
  };

  const getColor = (categoria) => {
    switch (categoria) {
      case 'Trabajo':
        return 'linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)';
      case 'Médico':
        return 'linear-gradient(315deg, #f9c1b1 0%, #fb8085 74%)';
      case 'Personal':
        return 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)';
      case 'Entretenimiento':
        return 'linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)';
      default:
        return 'yellow';
    }
  };

  const countDown = (date) => {
    const eventDate = new Date(date);
    const now = new Date();
    const daysDiff = eventDate.getDate() - now.getDate();
    console.log('timediff', daysDiff);
    return `Faltan ${daysDiff} días`;
  };

  return (
    <Flex margin="3" float="left">
      <Box
        maxW="330px"
        w="full"
        bg={getColor(categoria)}
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Text fontSize={'2xl'} fontWeight={600} shadow="base">
            {nombre}
          </Text>

          <Stack direction={'column'} align={'center'} justify={'center'}>
            <Text shadow="base" fontSize={'3xl'} fontWeight={400}>
              {fechaFormateada}
            </Text>
            <Text fontSize={'2xl'} shadow="base">
              {horaFormateada}
            </Text>
            <Text as="em" fontSize={'3xl'} shadow="base">
              {categoria}
            </Text>
            <Text fontSize={'2xl'} shadow="base">
              {countDown(fecha)}
            </Text>
          </Stack>
        </Stack>

        <Box>
          <Button
          shadow='sm'
          border='1px'
            onClick={() => deleteEvent(_id)}
            mt={10}
            mb='10'
            ml='10'
            w={'half'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}
          >
            Eliminar
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
