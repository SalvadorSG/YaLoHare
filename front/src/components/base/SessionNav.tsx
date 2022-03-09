import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.section`
  height: 64px;
  width: 30px;
  padding: 8px 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

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

const Name = styled.span`
  color: black;
  font-weight: 700;
  font-size: 16px;
  margin-right: 50px;
  align-items: 
`;

function SessionNav() {
  const { user, error, isLoading } = useUser();

  console.log(user);
  console.log(error);
  console.log(isLoading);

  return (
    <Nav>
      <div>
        <Name>Bienvenid@ {user?.name}</Name>
      </div>
      <div>
        {user ? (
          <Link href="/api/auth/logout">
            <BtnLink>Cerrar sesión</BtnLink>
          </Link>
        ) : (
          <Link href="/api/auth/login">
            <BtnLink>Iniciar sesión</BtnLink>
          </Link>
        )}
      </div>
    </Nav>
  );
}

export default SessionNav;
