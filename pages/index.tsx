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
import germana from '../assets/XXXL.webp';
import germana2 from '../assets/germana_big_compress.webp';
import Image from 'next/image';
import { useState } from 'react';

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
            <Image height={1000} src={germana} alt="Air conditioner" />
          </Box>
          <VStack
            textAlign={['center', null, null, 'start']}
            align={['center', null, null, 'start']}
            spacing="8"
            px={['4', null, '0']}
          >
            <Text
              fontSize={['39', null, null, '48', '64']}
              fontWeight="bold"
              lineHeight={['64px', null, null, '80px']}
            >
              კონდიციონერის ხელოსანი
            </Text>
            <Text lineHeight={'34px'} fontSize="26">
              <b>
                ჩვენი გუნდი არის დიდი გამოცდილების მქონე და მაღალი{' '}
                <b> პროფესიონალური</b> დონის. ჩვენ შეგვიძლია მოგიგვაროთ
                კონდიციონერთან დაკავშირებული <b>ნებისმიერი პრობლემა, </b> ჩვენ
                შეგვიძლია ჩავატაროთ კონდიციონერის ნებისმიერი სერვისი: მონტაჟი,
                დემონტაჟი, გადატანა, შეკეთება, ფრეონით შევსება, გაწმენდა. <br />{' '}
                ანდეთ თქვენი კომფორტი პროფესიონალებს.
              </b>
            </Text>

            <Text>
              <b> ჩვენ ვმუშაობთ 24/7, დაგვიკავშირდით.</b>{' '}
            </Text>
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
              <HStack justify={'space-between'} fontSize="22px">
                <Text>
                  40მ<sup>2</sup>
                </Text>
                <Text>-</Text>
                <Text>120 ლ</Text>
              </HStack>
              <HStack justify={'space-between'} fontSize="22px">
                <Text>
                  80მ<sup>2</sup>
                </Text>
                <Text>-</Text>
                <Text>150 ლ</Text>
              </HStack>
            </VStack>
          </Box>
          <Box maxW={['100%', null, '25%']} w="full" bg="#f0c635" p="8">
            <VStack w="full" pb="8">
              <Box borderRadius={'100px'} bg="white" p="4" mb="4">
                <Icon as={RepairIcon} boxSize="12" bg="white" />
              </Box>
              <Heading>შეკეთება</Heading>
              <Text fontSize="24px">100 ლ</Text>
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
              <Text fontSize="24px">100 ლ</Text>
            </VStack>
          </Box>
          <Box maxW={['100%', null, '25%']} w="full" bg="#f8e799" p="8">
            <VStack w="full">
              <Box borderRadius={'100px'} bg="white" p="4" mb="4">
                <a href="tel:568000667">
                  <Icon as={ContactIcon} boxSize="12" bg="white" />
                </a>
              </Box>
              <Heading>კონტაქტი</Heading>
              <HStack justify={'space-between'} fontSize="22px">
                <Text>Tel:</Text>
                <Text>
                  <a href="tel:568000667">568-00-06-67</a>
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Lobster;
  }

  * {
    box-sizing: border-box;
  }
`}</style>;

export default Home;
