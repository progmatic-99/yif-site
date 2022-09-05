import { Image, Heading, HStack, Text, VStack, Flex, Box, SimpleGrid, List, ListItem, ListIcon, ScaleFade, Icon, Center, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ImLocation2 } from 'react-icons/im'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { RegisterBtn } from "@src/components/layout/navbar";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { SiDiscover } from 'react-icons/si'
import { MdLeaderboard } from 'react-icons/md'
import { FaBuromobelexperte } from 'react-icons/fa'
import { IoGitNetworkSharp } from 'react-icons/io5'
import Link from "next/link";

const HIGHLIGHTS = {
  'PARTICIPANTS': '3K+',
  'SPEAKERS': '25+',
  'EXHIBITIONS & PARTNERS': '20+'
}

const POINTS = ['Footfall of 3,000+ participants', '2️5& counting - Indian speakers, celebrities, and influencers',
  '2️5+ Corporate exhibitions & partners',
  'Keynote speeches by representatives from the Ministry Of Gujarat and high-level officials. ',
  'Delegates from over 20+ states & 10+ countries',
  'AIC (Academia-Industry Connect) followed by awards night'
]

const ABOUTUS = [
  'YIF is a youth driven techno fest - hosting the youth, incubation centers, new businesses, financial backers and stakeholders - all on 1 platform.',
  'This is a stepping stone to India’s 2030 - Web 3, Industry 4.0, Blockchain, 5G, and IoT.',
  'We are here to talk about that by creating the next-generation movement.',
  'A platform to pitch and perform on the stage, raise the voice and share the viewpoint.'
]

const CARDS = {
  'AIC': ['Renowned brands showcasing their products & services, and promoting innovation & growth.', '/expo.jpeg'],
  'Conference': ['Prominent speakers delivering useful insights to 3000+ participants.', 'confer.jpeg'],
  'Awards': ['Witness magnificent award nights.', '/awards.jpeg']
}

// const POINTERS = ['AIC: Renowned brands showcasing their products and services and promoting innovation and growth',
//    'Conference: Prominent speakers delivering useful insights to 3000+ participants',
//    'Awards: Witness magnificent awards night'
// ]

/*
type IconName = 'SiDiscover' | 'MdLeaderboard' | 'FaBuromobelexperte' | 'IoGitNetworkSharp';

const PTS: Record<IconName, string> = {
  SiDiscover: 'Unique Speakers',
  MdLeaderboard: 'Leadership Path',
  FaBuromobelexperte: 'Expert Advice',
  IoGitNetworkSharp: 'Networking'
}

const LEARNING_POINTS = {
  'Unique Speakers': 'SiDiscover',
  'Leadership Path': 'MdLeaderboard',
  'Expert Advice': 'FaBuromobelexperte',
  'Networking': 'IoGitNetworkSharp'
}
*/
const Home: NextPage = () => {
  return (
    <main>
      <Box w='full' h='300px'>
        <Image src='/yif-2.png' w='100%' h='100%' alt='YIF banner' />
      </Box>
      <VStack spacing={4} m={8}>
        {/* <Heading as="h4" fontSize={{ lg: '3xl', md: '2xl', sm: 'xl' }} color='pink.100'>
          Building India’s Tomorrow
        </Heading> */}
        <Heading as="h1" fontSize={{ lg: '6xl', md: '4xl', base: '2xl' }}>Youth Innovation Forum 2022</Heading>
        {/* <Heading as="h4" fontSize={{ lg: '3xl', md: '2xl', sm: 'xl' }} color='pink.100'>
          Decentralizing India
        </Heading> */}
        <HStack bgColor="whiteAlpha.300" spacing="6" p='2' borderRadius='sm'>
          <HStack>
            <ImLocation2 />
            <Text>
              TBD
            </Text>
          </HStack>
          <HStack>
            <BsFillCalendarCheckFill />
            <Text>
              TBD
            </Text>
          </HStack>
        </HStack>
        <RegisterBtn size='lg' fontSize="sm" />
      </VStack>
      <VStack spacing="4" m="16">
        <Heading as="h3" fontWeight="200" fontSize={{ lg: '3xl', md: '2xl', sm: 'xl' }}>
          POWERED BY
        </Heading>
        <HStack spacing="4">
          <Image boxSize="80px" alt="UTB logo" src="/utb-light.png" />
        </HStack>
      </VStack>
      <Flex justify='center' align='center' m='2'>
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing='6'>
          {
            Object.entries(HIGHLIGHTS).map(([key, value], index) => {
              return (
                <Box key={index} p="6" display='flex' textAlign='center' alignItems='center' flexDirection='column' borderRadius='xl' color='white' bgColor='pink.400'>
                  <Heading as='h1' fontSize='4xl'>{value}</Heading>
                  <Heading as='h3' fontSize='sm'>{key}</Heading>
                </Box>
              )
            })
          }
        </SimpleGrid>
      </Flex>
      <VStack align='center' m="8">
        {/* <List spacing={3}>
          {
            POINTS.map((point, index) => {
              return (
                <ListItem key={index} fontSize='lg'>
                  <ListIcon as={TiTick} color='pink.400' />
                  {point}
                </ListItem>
              )
            })
          }
        </List> */}
      </VStack>
      <Box bgColor='white' m='12' borderRadius='lg' p='12'>
        <HStack p="8" spacing='24' align='space-between'>
          <Heading color='gray.800'>About the Summit</Heading>
          <VStack align='flex-end'>
            <List spacing={3}>
              {
                ABOUTUS.map((point, index) => {
                  return (
                    <ListItem key={index} fontSize='lg' color='gray.700'>
                      <ListIcon as={TiTick} color='pink.400' />
                      {point}
                    </ListItem>
                  )
                })
              }
            </List>
          </VStack>
        </HStack>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing='4' m={8}>
          {
            Object.entries(CARDS).map(([heading, val], index) => {
              return (
                <Box maxW='sm' key={index} borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor='pink.200'>
                  <Image src={val[1]} alt={heading} />

                  <Box p='6'>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      fontSize='xl'
                      as='h4'
                      lineHeight='tight'
                      noOfLines={1}
                      color='black'
                    >
                      {heading}
                    </Box>
                    <Box color='gray.700'>
                      {val[0]}
                    </Box>
                  </Box>
                </Box>
              )
            })
          }
        </SimpleGrid>
        <Speakers />
      </Box>
      <VStack m='8'>
        <Heading>Who should attend??</Heading>
      </VStack>
      <VStack m='16' spacing='14'>
        <Heading>What you will learn</Heading>
        <Learnings />
        <RegisterBtn size='lg' fontSize="lg" />
      </VStack>
      <Flex align='center' direction='column' justify='center' mt='24' pt='16' bgColor='white' color='black' w='full'>
        <Heading>Why to Exhibit?</Heading>
      </Flex>
    </main >
  );
};

const Learnings = () => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <SimpleGrid columns={{ sm: 2, md: 4 }} spacing='6'>
      <Box p='6' ref={ref} maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' color='white' bgColor='pink.300'>
        <VStack>
          <Icon fontSize='6xl' as={SiDiscover} />
          <Text fontSize='xl' fontWeight='bold' color='white' noOfLines={2}>Unique Speakers</Text>
        </VStack>
      </Box>
      <Box p='6' ref={ref} maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' color='white' bgColor='pink.300'>
        <VStack>
          <Icon as={MdLeaderboard} fontSize='6xl' />
          <Text fontSize='xl' fontWeight='bold' color='white' noOfLines={2}>Leadership Path</Text>
        </VStack>
      </Box>
      <Box p='6' ref={ref} maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' color='white' bgColor='pink.300'>
        <VStack>
          <Icon as={FaBuromobelexperte} fontSize='6xl' />
          <Text fontSize='xl' fontWeight='bold' color='white' noOfLines={2}>Expert Advice</Text>
        </VStack>
      </Box>
      <Box p='6' ref={ref} maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' color='white' bgColor='pink.300'>
        <VStack>
          <Icon as={IoGitNetworkSharp} fontSize='6xl' />
          <Text fontSize='xl' fontWeight='bold' color='white' noOfLines={2}>Networking</Text>
        </VStack>
      </Box>
    </SimpleGrid>
  )
}

const Speakers = () => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <VStack bgColor='white' p='16' color='black' spacing='10'>
      <Heading as='h1' fontSize='3xl'>Speakers</Heading>
      <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing='6' m='4'>
        {
          Object.entries(HIGHLIGHTS).map(([key, value], index) => {
            return (
              <ScaleFade
                initialScale={0.9}
                in={enterCount > 0}
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                <Box ref={ref} maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor="pink.200">
                  <Image src="https://bit.ly/dan-abramov" fallbackSrc="/utb-dark.png" alt="Dummy image" />
                  <Box p='6'>
                    <VStack>
                      <Text fontWeight='bold'>Aman Gupta</Text>
                      <Text>CoFounder</Text>
                      <Text color='pink.400'>boat</Text>
                    </VStack>
                  </Box>
                </Box>
              </ScaleFade>
            )
          })
        }
      </SimpleGrid>
    </VStack>
  )
}

export default Home;
