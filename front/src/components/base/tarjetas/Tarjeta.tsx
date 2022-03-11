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
  
  interface TarjetaProps {
    nombre: String;
    fecha: Date;
    recordatorio: Boolean;
  }
  

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
      <Flex margin='3' float='left'>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text>
                {nombre}
            </Text>
            <Text>
                {fechaFormateada}
            </Text>

            <Stack direction={'column'} align={'center'} justify={'center'}>
              <Text fontSize={'5xl'} fontWeight={600}>
                {fechaFormateada}
              </Text>
              <Text fontSize={'3xl'} boxShadow='md'>
                {horaFormateada}
            </Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
  
            <Button
            onClick={() => deleteEvent(_id)}
              mt={10}
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
              }}>
            Eliminar
            </Button>
          </Box>
        </Box>
      </Flex>
    );
  }
