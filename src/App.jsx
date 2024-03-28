import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Stratergy from './components/Stratergy'
import SwiperSlider from './components/Swiperslider'

function App() {

  const [getSection, setSection] = useState("");

  const handleSection = (subject) => {
    setSection(subject)
  }

  return (
    <div>
      <Header>
      <li class="nav-item ln  px-4"><a class=" navigateLink" href="#aboutus" ><span className='insideH1'>About us</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Product</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Enterprise</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Support</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Pricing</span></a></li>
      </Header>
      <Dashboard />
      <Jumbotron />
      <Stratergy />
      <SwiperSlider handleSection={handleSection}/>
      <Footer />
    </div>
  )
}

export default App
