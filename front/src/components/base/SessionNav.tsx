import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import styled from 'styled-components'


const Nav = styled.section`
  height: 64px;
  width: 30px;
  padding: 8px 24px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`

const BtnLink = styled.button`
  color: #00bd56;
  cursor: pointer;
  background: transparent;
  border: 1px solid #00bd56;
  border-radius: 8px;
  padding: 8px 16px;
  &:hover {
    background-color: #eafaf3;
  }
`

const Name = styled.span`
  color: #00bd56;
  font-weight: 700;
  font-size: 16px;
`

function SessionNav() {
  const { user, error, isLoading } = useUser()

  console.log(user)
  console.log(error)
  console.log(isLoading)

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
  )
}

export default SessionNav;

  

// export const SessionNav = () => {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   console.log(user);
//   return (
//     <div tw="flex flex-row gap-3">
//       {user ? (
//         <Link href="/api/auth/logout">
//           <a>
//             <ButtonNav>Logout {user.email}</ButtonNav>
//           </a>
//         </Link>
//       ) : (
//         <Link href="/api/auth/login">
//           <a>
//             <ButtonNav variant="light">Login</ButtonNav>
//           </a>
//         </Link>
//       )}
//     </div>
//   );
// };
