import { Image, Heading, HStack, Text, VStack, Flex, Box, SimpleGrid, List, ListItem, ListIcon } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ImLocation2 } from 'react-icons/im'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { RegisterBtn } from "@src/components/layout/navbar";

const HIGHLIGHTS = {
  'PARTICIPANTS': '2K+',
  'SPEAKERS': '25+',
  'EXHIBITIONS & PARTNERS': '20+'
}

const POINTS = ['Footfall of 2,000 + participants', '2️5 & counting - Indian speakers, celebrities, and influencers',
  '2️0 + Corporate exhibitions & partners',
  'Keynote speeches by representatives from the Ministry Of Gujarat and high-level officials. ',
  'Delegates from over 20+ states & 10+ countries',
  'AIC (Academia-Industry Connect) followed by awards night'
]

const Home: NextPage = () => {
  return (
    <main>
      <VStack spacing={4} m={8}>
        <Heading as="h4" fontSize={{ lg: '3xl', md: '2xl', sm: 'xl' }}>
          Building India’s Tomorrow
        </Heading>
        <Heading as="h1" fontSize={{ lg: '6xl', md: '4xl', base: '2xl' }}>Youth Innovation Forum 2022</Heading>
        <Heading as="h4" fontSize={{ lg: '3xl', md: '2xl', sm: 'xl' }}>
          Decentralizing India
        </Heading>
        <HStack bgColor="whiteAlpha.300" spacing="6">
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
        <List spacing={3}>
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
        </List>
      </VStack>
    </main >
  );
};

export default Home;
