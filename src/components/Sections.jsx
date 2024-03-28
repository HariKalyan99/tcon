import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Sections = ({getSection}) => {
  return (
    <div>
        <Header>
        <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Section</span></a></li>
        <li class="nav-item ln  px-4"><a class=" navigateLink" href="#aboutus" ><span className='insideH1'>Gallery</span></a></li>
        <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
        <li class="nav-item ln  px-4"><Link to={"/"} class=" navigateLink"  ><span className='insideH1'>Home</span></Link></li>
    </Header>
    <div>
    <h1>{getSection}</h1>
    </div>
    </div>
  )
}

export default Sections