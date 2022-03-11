import { Box, Flex, Grid } from '@chakra-ui/react';
import useSWR from 'swr';
import { Tarjeta } from './Tarjeta';

export const ListaDeEventos = () => {
  const { data } = useSWR('api/eventos');
  if (!data) {
    return (
      <Flex backgroundImage="linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)">
        No hay eventos futuros
      </Flex>
    );
  }
  return (
    <Grid
    fontFamily='initial'
      backgroundImage="linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
      templateColumns="repeat(4, 1fr)"
      gap={6}
    >
      {data.map((evento) => (
        <Tarjeta key={evento._id} {...evento} />
      ))}
    </Grid>
  );
};
