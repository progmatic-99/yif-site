import { Image, Heading, HStack, Text, VStack, Flex, Box, SimpleGrid, List, ListItem, ListIcon, ScaleFade, Icon, Center, Stack, useDisclosure, IconButton, Collapse, Button } from "@chakra-ui/react";
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
import { motion } from 'framer-motion'
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const HIGHLIGHTS = {
  'PARTICIPANTS': '3K+',
  'SPEAKERS': '25+',
  'EXHIBITIONS & PARTNERS': '20+'
}

const ATTENDEES = [
  'University Students',
  'Investors',
  'Founders',
  'Entrepreneurs',
  'Influencers',
  'Government Officials',
  'Creators',
  'Brands',
  'Agencies',
  'E-Commerce brands'
]

const EXHIBITION = [
  'Academia Industry Connect- As practical knowledge outweighs theoretical knowledge. Keeping this in mind, we are offering the youth a chance to hear from various industry experts, founders and influential figures about their challenges and experiences.',
  'Discover latest developments in the field of Technology',
  'Find out what you need to do to start your leadership path.',
  'Surround yourself with experts',
  'Networking- Grow and expand your business',
  'Growing demand within Industry 4.0',
  'Enclose sustainability and trust in Technology',
  'Meet and Engage with 3000+ participants',
  'Brand Visibility',
]

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

const Home: NextPage = () => {
  return (
    <main>
      <Box w='full' h='300px'>
        <Image src='/yif-2.png' w='100%' h='100%' alt='YIF banner' />
      </Box>
      <VStack spacing={4} m={8}>
        <Heading as="h1" fontSize={{ lg: '6xl', md: '4xl', base: '2xl' }}>Youth Innovation Forum 2022</Heading>
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
      <Box bgColor='white' m='12' borderRadius='lg' p='12'>
        <Flex p="8" direction={{ base: 'column', lg: 'row' }} align={{ base: 'center', lg: 'space-between' }} justify={{ base: 'space-between' }}>
          <Heading id='about-us' color='gray.800' mb={{ base: '4' }}>About the Summit</Heading>
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
        </Flex>
        <SimpleGrid id='key-highlights' columns={{ base: 1, lg: 3 }} spacing='4' m={8}>
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
      <VStack m='8' spacing='8'>
        <Heading>Who should attend??</Heading>
        <Box bg='pink.50' p='12' borderRadius='3xl' sx={{ overflow: "hidden" }}>
          <VStack sx={{ animation: "to-left 1s" }}>
            {
              ATTENDEES.map((attendee, index) => {
                return (
                  <Button
                    m='4'
                    p='2'
                    borderRadius='xl'
                    colorScheme='pink'
                    key={index}
                    variant='outline'
                    as={motion.button}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{
                      opacity: 1,
                      x: -60,
                      transition: { delay: 1 }
                    }}
                  >{attendee}</Button>
                )
              })
            }
          </VStack>
        </Box>
      </VStack>
      <VStack m='16' spacing='14'>
        <Heading>What you will learn</Heading>
        <Learnings />
        <RegisterBtn size='lg' fontSize="lg" />
      </VStack>
      <Flex align='center' direction='column' justify='center' mt='24' pt='16' bgColor='white' color='black' w='full'>
        <Heading>Why to Exhibit?</Heading>
        <Box p={12} borderRadius='xl' m='12' bgColor='gray.800' boxShadow='lg' color='whiteAlpha.100'>
          <Flex direction={{ base: 'column', lg: 'row' }} align={{ sm: 'center', lg: 'space-between' }} justify={{ lg: "space-between" }}>
            <Image as={motion.img}
              src='/exhibition.jpg'
              alt="Exhibition Image"
              w={{ base: '250px', lg: '400px' }}
              h={{ base: '300px', lg: '400px' }}
              initial='hidden'
              whileInView={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            />
            <VStack>
              <List spacing={4} m='8'>
                {
                  EXHIBITION.map((point, index) => {
                    return (
                      <ListItem key={index} fontSize='lg' color='white'>
                        <ListIcon as={TiTick} color='pink.400' />
                        {point}
                      </ListItem>
                    )
                  })
                }
              </List>
            </VStack>
          </Flex>
        </Box>
      </Flex>
      <FAQ />
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
    <VStack id='speakers' bgColor='white' p='16' color='black' spacing='10'>
      <Heading as='h1' fontSize='3xl'>Speakers</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='6' m='4'>
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
                  <Image src="" fallbackSrc="/fallback.png" alt="Speaker's image" />
                  <Box p='6'>
                    <VStack>
                      <Text fontWeight='bold'>TBD</Text>
                      <Text>TBD</Text>
                      <Text color='pink.400'>TBD</Text>
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

const ticket = {
  'How can I purchase the ticket?': 'Tickets can be purchased from our website.',
  'Can I transfer my ticket to another person?': 'No, the ticket is non- transferable',
  'Can I get a refund if not able to attend?': 'The ticket is non-refundable'
}

const sponsorship = {
  'How to become a sponsor?':
    'You can fill up the form to become a sponsor for the event.',
  'What types of sponsorships are available?':
    'You can choose Diamond sponsorship, Gold sponsorship, Silver sponsorship and Bronze sponsorship.',
}

const general = {
  'What is Youth Innovation Forum?':
    'Youth Innovation Forum is nextgen movement that inspires youth to become job creators and engage with policy makers and industry experts with discrete discussions on Web3, Industry 4.0, Blockchain, 5G and IOT.',
  'Where will YIF take place?':
    'YIF will take place in Ahmedabad and will also be broadcasted virtually.',
  'How to register yourself for the event?':
    'Once you get to the YIF website, log in and you will receive your login credentials prior to the event.',
  'When will more details be available on the event?':
    'We are continuously updating the website to provide more details to the attendees and furthermore we will be sending the mail to the registered users’ inbox.',
  'Will the sessions run simultaneously?':
    'The YIF has 4 sessions that will run simultaneously.',
  'Can we chat with the speakers during the event?':
    'There will be a Q&A session taking place after every session and it will be exclusively for the attendees.',
  'Do I need to register for the sessions separately?': 'No, you will get access to all the sessions once you register.'
}

const faqs = {
  'General': general,
  'Tickets': ticket,
  'Sponsorship': sponsorship
}

const FAQ = () => {
  return (
    <Flex id='faq' m='12' p='8' direction='column' justify='center' align='center' bg='white' boxShadow='md' borderRadius='lg'>
      <Heading fontSize={{ md: '5xl' }} color='black'>FAQs</Heading>
      {
        Object.entries(faqs).map(([heading, faq], index) => {
          return (
            <Flex key={index} m='6' direction='column' p='6' w='full'>
              <Heading id={`${heading}`} fontSize={{ md: '2xl' }} mb='4' color='pink.600' alignSelf='center'>{heading}</Heading>
              {
                Object.entries(faq).map(([question, answer], index) => {
                  const { isOpen, onToggle } = useDisclosure();

                  return (
                    <Flex w='100%' p='6' key={index} justify='space-between' direction='column' borderBottom='1px solid #2D3748'>
                      <Flex justify='space-between' align='center'>
                        <Heading fontSize={{ md: 'xl' }} color='gray.700'>{question}</Heading>
                        <IconButton onClick={onToggle} colorScheme='pink' variant='solid' aria-label='Expand question' icon={isOpen ? <CloseIcon /> : <AddIcon />} />
                      </Flex>
                      <Collapse in={isOpen} animateOpacity>
                        <Text color='pink.400' fontSize={{ md: 'xl' }}>{answer}</Text>
                      </Collapse>
                    </Flex>
                  )
                })
              }
            </Flex>
          )
        })
      }
    </Flex>
  )
}

export default Home;
