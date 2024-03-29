import React, { useContext } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { sectionStore } from '../App'
import Footer from './Footer'

const Sections = () => {

    const {getSectioning} = useContext(sectionStore);

    // const navigate = useNavigate();
  return (
    <div>
        <Header>
        <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Section</span></a></li>
        <li class="nav-item ln  px-4"><a class=" navigateLink" href="#aboutus" ><span className='insideH1'>Gallery</span></a></li>
        <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
        <li class="nav-item ln  px-4"><a href={"/"} class=" navigateLink"  ><span className='insideH1'>Home</span></a></li>
    </Header>
    <div>
    <h1>{getSectioning}</h1>
    </div>
    <Footer />
    </div>
  )
}

export default Sections;