import React from 'react';
import { Img, Box, Text, Stack, Flex } from '@chakra-ui/react';

export const BackgroundPrincipal = () => {
  return (
    <Flex align="center" w='100vw' h='100vh' justifyContent="center">

      <Img
        alt="bg"
        w="100%"
        h="100%"
        opacity="1"
        src="https://live.staticflickr.com/65535/51931007765_8728026dda_b.jpg"
      ></Img>
      <Stack spacing={3}></Stack>
    </Flex>
  );
};
