import { Provider } from 'react-redux';
import { store, persistor } from "../../redux/Store"
import { PersistGate } from 'redux-persist/integration/react'
import Settings from '../../pagescomp/Settings';
import Manage from '../../pagescomp/staff/manage';



export default function Home() {

  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <Manage />
      </PersistGate>
    </Provider>
  )
}
