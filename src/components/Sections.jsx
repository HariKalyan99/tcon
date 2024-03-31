import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { sectionStore } from '../App'
import Footer from './Footer'
import Thumbsgallery from './Thumbsgallery'
import Designprocess from './Designprocess'
import logo from '../assets/logotc.png'

const Sections = () => {

    const {secList} = useContext(sectionStore);

    const navigate = useNavigate();
  return (
    <div>
        <nav class="navbar navbar-expand-md  sticky-top" data-bs-theme="dark" style={{backgroundColor: "var(--background-color)", border: "3px solid var(--primary-color)"}}>
  <div class="container-fluid ">
    <a class="navbar-brand d-flex justify-content-start px-2" href="#">
      <img src={logo} alt="logo" style={{height: "45px"}}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation" style={{backgroundColor: "transparent", border: "none"}}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end w-75" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel" style={{color: "var(--primary-color)"}}>Tron's Contructions</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav flex-grow-1 justify-content-end">
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#" ><span className='insideH1'>Section</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#aboutus" ><span className='insideH1'>Gallery</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
        <li className="nav-item ln  px-4"><Link to="/" onClick={() => navigate(-1)} className=" navigateLink"  ><span className='insideH1'>Home</span></Link></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    <main>

    {secList.map((section, ind) => <div key={ind} className="mb-5" >
      <div className='d-flex flex-column justify-content-center position-relative ' >
        <img src={section.hero} alt="hero" style={{height: '300px',  opacity: "0.7", objectFit: "cover"}} />
      <div className="d-flex justify-content-start w-100 position-absolute" >
            <h1 className="fw-bold text-light" style={{ borderTop: "6px solid #eedca3", margin: "60px"}}>
              {section.section}
            </h1>
          </div>
      </div>
      <h1 className='text-center m-5'>{section.section} Palette</h1>
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