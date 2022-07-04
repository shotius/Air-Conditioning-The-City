import {
  AspectRatio,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
// import Image from 'next/image';
import { RepairIcon } from '../components/atoms/icons/RepairIcon';
import { InstallIcon } from '../components/atoms/icons/InstallIcon';
import { RemoveIcon } from '../components/atoms/icons/RemoveIcon';
import { ContactIcon } from '../components/atoms/icons/ContactIcon';
import germana from '../assets/123_4.webp';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Box pt={['0', null, null, null, '16']} w="full" bg="#f1f1f1" minW="full">
      <Container
        maxW="1380px"
        p="0"
        pb={[null, null, null, null, '48px', '72px']}
      >
        <Stack
          w="full"
          spacing={['4', '8']}
          direction={['column', null, 'row']}
        >
          <Box
            minW={'50%'}
            bg="lightgray"
            display={'flex'}
            alignItems="stretch"
          >
            <Image src={germana} alt="Air conditioner" />
          </Box>
          <VStack
            textAlign={['center', null, null, 'start']}
            align={['center', null, null, 'start']}
            spacing="8"
            px={['4', null, '0']}
          >
            <Heading size="lg">About us</Heading>
            <Heading size={['xl', null, '2xl', '4xl']}>
              Plan. Perform. Inspire.
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              saepe, ad tenetur mollitia soluta tempore voluptates illum ipsum
              ex cupiditate provident eum delectus reprehenderit distinctio
              consequuntur! Voluptatem in velit tempore.
            </Text>
            <Button
              bg="#e4c347"
              borderRadius="none"
              textTransform="uppercase"
              px="6"
              _hover={{
                background: '#f2d554',
              }}
            >
              Read more
            </Button>
            <Text> consequuntur! Voluptatem in velit tempore.</Text>
          </VStack>
        </Stack>
        <Stack
          direction={['column', null, 'row']}
          w="full"
          spacing="0"
          align={'stretch'}
          minH="350px"
          mt={['8', null, '0']}
        >
          <Box maxW={['100%', null, '25%']} w="full" bg="#e2b731" p="8">
            <VStack w="full">
              <Box borderRadius={'100px'} bg="white" p="4" mb="4">
                <Icon as={InstallIcon} boxSize="12" bg="white" />
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
          <Box maxW={['100%', null, '25%']} w="full" bg="#f0c635" p="8">
            <VStack w="full" pb="8">
              <Box borderRadius={'100px'} bg="white" p="4" mb="4">
                <Icon as={RepairIcon} boxSize="12" bg="white" />
              </Box>
              <Heading>შეკეთება</Heading>
              <HStack justify={'space-between'}>
                <Text>
                  20მ<sup>2</sup>
                </Text>
                <Text>-</Text>
                <Text>100ლ</Text>
              </HStack>
            </VStack>
          </Box>
          <Box
            maxW={['100%', null, '25%']}
            w="full"
            bg="#f2d554"
            p="8"
            minH="300px"
          >
            <VStack w="full">
              <Box borderRadius={'100px'} bg="white" p="4" mb="4">
                <Icon as={RemoveIcon} boxSize="12" bg="white" />
              </Box>
              <Heading>დემონტაჟი</Heading>
              <HStack justify={'space-between'}>
                <Text>
                  20მ<sup>2</sup>
                </Text>
                <Text>-</Text>
                <Text>100ლ</Text>
              </HStack>
            </VStack>
          </Box>
          <Box maxW={['100%', null, '25%']} w="full" bg="#f8e799" p="8">
            <VStack w="full">
              <Box borderRadius={'100px'} bg="white" p="4" mb="4">
                <Icon as={ContactIcon} boxSize="12" bg="white" />
              </Box>
              <Heading>კონტაქტი</Heading>
              <HStack justify={'space-between'}>
                <Text>
                  20მ<sup>2</sup>
                </Text>
                <Text>-</Text>
                <Text>100ლ</Text>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
