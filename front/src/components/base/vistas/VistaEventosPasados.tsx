import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export const VistaEventosPasados = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1.5}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        />
      </Flex>
      <Flex
        fontFamily="initial"
        backgroundColor="#b8c6db"
        backgroundImage="linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            Aquí podremos ver la lista con los eventos que ya han ocurrido y
            cúanto tiempo ha pasado.
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.500'}></Text>
        </Stack>
      </Flex>
    </Stack>
  );
};
