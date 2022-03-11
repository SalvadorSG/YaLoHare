import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import styled from 'styled-components';

const BtnLink = styled.button`
  color: green;
  cursor: pointer;
  background: white;
  border: 1px solid black;
  height: 50px;
  width: 100px;
  border-radius: 8px;
  padding: 8px px;
  &:hover {
    background-color: lightgreen;
  }
`;

function SessionNav() {
  const { user, error, isLoading } = useUser();

  console.log(user);
  console.log(error);
  console.log(isLoading);

  return (
    <section>
      <div>
        <span> {user?.name}</span>
      </div>
      <div>
        {user ? (
          <Link href="/api/auth/logout">
            <button>Cerrar sesión</button>
          </Link>
        ) : (
          <Link href="/api/auth/login">
            <BtnLink>Iniciar sesión</BtnLink>
          </Link>
        )}
      </div>
    </section>
  );
}

export default SessionNav;
