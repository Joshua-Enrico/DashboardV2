import '../styles/globals.css';

// modules to handle persit information
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "../redux/Store"; // persist the store
//
import SideBar from '../components/sidebar/SideBar'; // sidebar component , is here to have persist component
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar'; // progress bar
import { AuthProvider } from '../utils/auth1';// Authprovider is used to pass user toke status to all components


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthProvider>
    <Provider store={store} >
      <NextNProgress
        color="#7380ec"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <PersistGate loading={null} persistor={persistor} >
        {router.pathname === '/' ? null : <SideBar />}

        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </AuthProvider>
  )
}

export default MyApp
