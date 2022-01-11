import '../styles/globals.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "../redux/Store"
import SideBar from '../components/sidebar/SideBar';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <SideBar />
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
