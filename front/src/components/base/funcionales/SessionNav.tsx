import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { MdOutlinePermIdentity } from 'react-icons/md';
import { Button, Flex } from '@chakra-ui/react';

function SessionNav() {
  const { user, error, isLoading } = useUser();

  console.log(user);
  console.log(error);
  console.log(isLoading);

  return (
    <Flex align="center" padding="5">
      <Flex align="center" margin="5">
        <span> {user?.name}</span>
      </Flex>
      <div>
        {user ? (
          <Link href="/api/auth/logout">
            <Button
              leftIcon={<MdOutlinePermIdentity />}
              bg={'blue.400'}
              variant="outline"
              textColor="ButtonHighlight"
              _hover={{
                bg: 'blue.500',
              }}
            >
              Cerrar sesión
            </Button>
          </Link>
        ) : (
          <Link href="/api/auth/login">
            <Button
              leftIcon={<MdOutlinePermIdentity />}
              bg={'blue.400'}
              variant="outline"
              textColor="ButtonHighlight"
              _hover={{
                bg: 'blue.500',
              }}
            >
              Iniciar sesión
            </Button>
          </Link>
        )}
      </div>
    </Flex>
  );
}

export default SessionNav;
