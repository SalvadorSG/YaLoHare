import React from 'react';
import Link from 'next/link';

const Navbar = () => {
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

    </ul>
  );
};

export default Navbar;