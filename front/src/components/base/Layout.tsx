import { Navbar } from './Navbar';
import { Box, Img, Flex } from '@chakra-ui/react';
import { PruebaNavbar } from './PruebaNavbar';


export const Layout = ({ children }) => {
  return (
    <Box>
      {/* <Navbar /> */}
      <PruebaNavbar />
      <div>{children}</div>
    </Box>
  );
};
