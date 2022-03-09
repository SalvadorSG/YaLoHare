import { UserProvider } from '@auth0/nextjs-auth0';
import { SWRConfig } from 'swr';
import { Layout } from '../components/base/Layout';
import { fetcher } from '../lib/fetcher';
import '../public/main.css';

const App = ({ Component, pageProps }) => {
  return (
    <div className="bg-gradient-to-r from-green via-emerald2 to-emerald3 h-screen">
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
    </div>
  );
};

export default App;
