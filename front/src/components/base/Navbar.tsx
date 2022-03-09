import React from 'react';
import Link from 'next/link';
import SessionNav from './SessionNav';

export const Navbar = () => {
  return (
    <ul className='flex rounded-md justify-around items-center h-16 bg-emerald1 text-black relative'>
      <li className='border p-1 border rounded-md hover:bg-emerald3 transition delay-150'>
        <Link href="/">Home</Link>
      </li>
      <li className='border p-1 border rounded-md hover:bg-emerald3 transition delay-150'>
        <Link href="/crearEvento">Añade un nuevo evento</Link>
      </li>
      <li className='border p-1 border rounded-md hover:bg-emerald3 transition delay-150'>
        <Link href="/eventoFuturo">Eventos futuros</Link>
      </li>
      <li className='border p-1 border rounded-md hover:bg-emerald3 transition delay-150'>
        <Link href="/eventoPasado">Eventos pasados</Link>
      </li>
      <SessionNav />
    </ul>
  );
};
