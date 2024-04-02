import TronsStoreContextProvider from '../store/Tronsstore'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {

  return (
    <TronsStoreContextProvider>
      <Outlet />
    </TronsStoreContextProvider>
  )
}

export default App
