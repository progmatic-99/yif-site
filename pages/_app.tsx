import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "@src/components/layout";
import {theme} from "@src/theme/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
