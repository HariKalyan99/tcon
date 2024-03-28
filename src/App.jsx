import { createContext, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'


export const sectionStore = createContext({
  handleSection: () => {},
  getSectioning: "",
})

const App = () => {

  const [getSectioning, setSectioning] = useState("");

  const handleSection = (subject) => {
    console.log(subject)
    setSectioning(subject)
  }



  return (
    <sectionStore.Provider value={{handleSection, getSectioning}}>
      <Header>
      <li class="nav-item ln  px-4"><a class=" navigateLink" href="#aboutus" ><span className='insideH1'>About us</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Product</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Enterprise</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Support</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Pricing</span></a></li>
      </Header>
      <Dashboard />
      <Footer />
    </sectionStore.Provider>
  )
}

export default App
