import { Box } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />

      <div>{children}</div>
      <Footer />
    </Box>
  );
};
