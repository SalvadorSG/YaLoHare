import {
  Link,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { MdBuild, MdCode, MdCodeOff } from 'react-icons/md';

export const PaginaIndex = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        backgroundColor="#b8c6db"
        backgroundImage="linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Bienvenid@ a
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Ya lo haré
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.500'}>
            Ya lo haré es una web creada con el propósito de ayudarte a que no
            te olvides de nada, así que ya sabes, empieza a apuntar tus eventos.
            (O déjalo para más tarde)
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href="https://github.com/SalvadorSG/YaLoHare" isExternal>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                leftIcon={<MdBuild />}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Documentación del proyecto
              </Button>
            </Link>
            <Link href="https://www.corecode.school/" isExternal>
              <Button
                rounded={'full'}
                leftIcon={<MdCode />}
                rightIcon={<MdCodeOff />}
              >
                CORE Code School
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://live.staticflickr.com/65535/51931007765_8728026dda_b.jpg'
          }
        />
      </Flex>
    </Stack>
  );
};
