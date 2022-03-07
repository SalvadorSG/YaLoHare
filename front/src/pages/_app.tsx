import { UserProvider } from '@auth0/nextjs-auth0';
import { SWRConfig } from 'swr';
import { Layout } from '../components/base/Layout';
import { fetcher } from '../lib/fetcher';

const App = ({ Component, pageProps }) => {
  return (
    <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher,
    }}>
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </SWRConfig>
  );
};

export default App;
