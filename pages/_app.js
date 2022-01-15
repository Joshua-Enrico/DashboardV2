import '../styles/globals.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "../redux/Store";
import SideBar from '../components/sidebar/SideBar';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
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
  )
}

export default MyApp
