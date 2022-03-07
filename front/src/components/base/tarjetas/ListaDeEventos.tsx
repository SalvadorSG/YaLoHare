import useSWR from 'swr';
import { Tarjeta } from './Tarjeta';

export const ListaDeEventos = () => {
  const { data } = useSWR('api/eventos');
  if (!data) {
    return <div>No hay eventos futuros</div>;
  }
  return (
    <div>
      {data.map((evento) => (
        <Tarjeta key={evento.id} {...evento} />
      ))}
    </div>
  );
};
