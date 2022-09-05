import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "@src/components/layout";
import { theme } from "@src/theme/theme"
import Head from "next/head";
import { motion, useScroll } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel='YIF logo' href="" />
        <title>YIF 2022</title>
      </Head>
      <motion.div style={{ scaleX: scrollYProgress, background: '#ED64A6', top: 0, left: 0, right: 0, height: '5px', transformOrigin: '0%', position: 'fixed' }} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
