import {
  AspectRatio,
  Container,
  HStack,
  Image,
  VStack,
  Heading,
  Text,
  Stack,
  Button,
  Box,
  Icon,
  Center,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FixIcon } from '../components/atoms/icons/FixIcon';

const Home: NextPage = () => {
  return (
    <Container maxW="1380px" pt={['4', '16', '24']} pb="64px">
      <Stack w="full" spacing={['4', '8']} direction={['column', null, 'row']}>
        <AspectRatio
          maxW="500px"
          w="full"
          minW={['100%', null, '50%']}
          ratio={4 / 3}
          bg="lime"
        >
          <Image
            src="https://www.hhaircon.com.au/wp-content/uploads/2015/09/HH-Air-Conditioning1.jpg"
            alt="Air conditioner"
          />
        </AspectRatio>
        <VStack align="start" spacing="8">
          <Heading size="lg">About us</Heading>
          <Heading size="4xl">Plan. Perform. Inspire.</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            saepe, ad tenetur mollitia soluta tempore voluptates illum ipsum ex
            cupiditate provident eum delectus reprehenderit distinctio
            consequuntur! Voluptatem in velit tempore.
          </Text>
          <Button>Read more</Button>
          <Text> consequuntur! Voluptatem in velit tempore.</Text>
        </VStack>
      </Stack>
      <HStack w="full" bg="yellow" spacing="0" align={'stretch'} minH="250px">
        <Box maxW="25%" w="full" bg="#e2b731" p="8">
          <VStack w="full">
            <Box borderRadius={"100px"} bg="white" p="4" mb="4">
              <Icon as={FixIcon} boxSize="8" bg="white" />
            </Box>
            <Heading>მონტაჟი</Heading>
            <HStack justify={'space-between'}>
              <Text>
                20მ<sup>2</sup>
              </Text>
              <Text>-</Text>
              <Text>100ლ</Text>
            </HStack>
            <HStack justify={'space-between'}>
              <Text>
                30მ<sup>2</sup>
              </Text>
              <Text>-</Text>
              <Text>100ლ</Text>
            </HStack>
            <HStack justify={'space-between'}>
              <Text>
                40მ<sup>2</sup>
              </Text>
              <Text>-</Text>
              <Text>100ლ</Text>
            </HStack>
            <HStack justify={'space-between'}>
              <Text>
                50მ<sup>2</sup>
              </Text>
              <Text>-</Text>
              <Text>100ლ</Text>
            </HStack>
          </VStack>
        </Box>
        <Box maxW="25%" w="full" bg="#f0c635" p="8">
          <VStack w="full" pb="8">
            <Icon as={FixIcon} />
            <Heading>მონტაჟი</Heading>
            <HStack justify={'space-between'}>
              <Text>
                20მ<sup>2</sup>
              </Text>
              <Text>-</Text>
              <Text>100ლ</Text>
            </HStack>
          </VStack>
        </Box>
        <Box maxW="25%" w="full" bg="#f2d554" p="8" minH="300px">
          <VStack w="full">
            <Icon as={FixIcon} pb="8" />
            <Heading>მონტაჟი</Heading>
            <HStack justify={'space-between'}>
              <Text>
                20მ<sup>2</sup>
              </Text>
              <Text>-</Text>
              <Text>100ლ</Text>
            </HStack>
          </VStack>
        </Box>
        <Box maxW="25%" w="full" bg="#f8e799" p="8">
          <VStack w="full">
            <Icon as={FixIcon} pb="8" />
            <Heading>მონტაჟი</Heading>
            <HStack justify={'space-between'}>
              <Text>
                20მ<sup>2</sup>
              </Text>
              <Text>-</Text>
              <Text>100ლ</Text>
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Home;
