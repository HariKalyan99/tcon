import React, { useContext } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { sectionStore } from '../App'
import Footer from './Footer'
import Thumbsgallery from './Thumbsgallery'
import Designprocess from './Designprocess'


const Sections = () => {

    const {getSectioning, secList} = useContext(sectionStore);

    const navigate = useNavigate();
  return (
    <div>
        <Header>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#" ><span className='insideH1'>Section</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#aboutus" ><span className='insideH1'>Gallery</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
        <li className="nav-item ln  px-4"><a href="/" className=" navigateLink"  ><span className='insideH1'>Home</span></a></li>
    </Header>
    <main>

    {secList.map((section, ind) => <div key={ind} className="mb-5" >
      <div className='d-flex flex-column justify-content-center position-relative ' >
        <img src={section.hero} alt="hero" style={{height: '300px',  opacity: "0.7", objectFit: "cover"}} />
      <div className="d-flex justify-content-start w-100 position-absolute" >
            <h1 className="fw-bold text-light" style={{ borderTop: "6px solid #eedca3", margin: "60px"}}>
              Home Storages
            </h1>
          </div>
      </div>
    </div>)}

      <div className='container '>
      {secList.map((sec, ind) => <Thumbsgallery key={ind} images={sec.images}/>)}
      </div>
  <div className="container py-4">

    
    {secList.map((abt, ind) => <Designprocess key={ind} abt={abt}/>)}


  </div>
</main>
    <Footer />
    </div>
  )
}

export default Sections;