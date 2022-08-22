import { Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <VStack spacing={4} m={8}>
        <Heading as="h4" size="sm">
          Building India’s Tomorrow
        </Heading>
        <Heading as="h1">Youth Innovation Forum 2022</Heading>
        <Heading as="h4" size="sm">
          Decentralizing India
        </Heading>
      </VStack>
    </main>
  );
};

export default Home;
