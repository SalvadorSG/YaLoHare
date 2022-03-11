import { UserProvider } from '@auth0/nextjs-auth0';
import { SWRConfig } from 'swr';
import { Layout } from '../components/base/Layout';
import { fetcher } from '../lib/fetcher';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher,
      }}
    >
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </SWRConfig>
    </ChakraProvider>
  );
};

export default App;
