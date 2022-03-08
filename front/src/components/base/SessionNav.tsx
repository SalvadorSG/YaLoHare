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
  color: blue;
  cursor: pointer;
  background: transparent;
  border: 1px solid blue;
  border-radius: 8px;
  padding: 8px 20px;
  &:hover {
    background-color: lightblue;
  }
`;

const Name = styled.span`
  color: black;
  font-weight: 700;
  font-size: 16px;
`;

function SessionNav() {
  const { user, error, isLoading } = useUser();

  console.log(user);
  console.log(error);
  console.log(isLoading);

  return (
    <Nav>
      <div>
        <Name>{user?.name}</Name>
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
