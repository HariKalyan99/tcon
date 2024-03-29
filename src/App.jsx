import { createContext, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes} from 'react-router-dom'
import Sections from './components/Sections'
import PageNotFound from './components/PageNotFound'

export const sectionStore = createContext({
  handleSection: () => {},
  getSectioning: "",
})

const App = () => {

  const [getSectioning, setSectioning] = useState("");

  const handleSection = (subject) => {
    setSectioning(subject)
  }



  return (
    <sectionStore.Provider value={{handleSection, getSectioning}}>
      <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/sections' element={<Sections />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </sectionStore.Provider>
  )
}

export default App
