import React from 'react';
import Link from 'next/link';
import SessionNav from './SessionNav';

export const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/crearEvento">Añade un nuevo evento</Link>
      </li>
      <li>
        <Link href="/eventoFuturo">Eventos futuros</Link>
      </li>
      <li>
        <Link href="/eventoPasado">Eventos pasados</Link>
      </li>
      <SessionNav />
    </ul>
  );
};
