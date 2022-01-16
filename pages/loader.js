import Head from 'next/head'
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from "../redux/Store"
import { PersistGate } from 'redux-persist/integration/react'
import PreloaderComp from '../components/preloader/preloaderComp';



export default function Loader() {


  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <PreloaderComp />
      </PersistGate>
    </Provider>
  )
}