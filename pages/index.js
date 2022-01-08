import Head from 'next/head'
import { Provider } from 'react-redux';
import Homepage from '../pagescomp/home';
import { store, persistor } from "../redux/Store"
import { PersistGate } from 'redux-persist/integration/react'



export default function Home() {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <Homepage />
      </PersistGate>
    </Provider>
  )
}
