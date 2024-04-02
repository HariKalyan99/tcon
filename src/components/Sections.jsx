import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { sectionStore } from '../App'
import Footer from './Footer'
import Thumbsgallery from './Thumbsgallery'
import Designprocess from './Designprocess'
import logo from '../assets/logotc.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Sections = () => {

    const {secList} = useContext(sectionStore);

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, 100)
    }, ["/sections"]);
    
    const navigate = useNavigate();
  return (
    <div >
        <nav className="navbar navbar-expand-md  sticky-top" data-bs-theme="dark" style={{backgroundColor: "var(--background-color)", border: "3px solid var(--primary-color)"}}>
  <div className="container-fluid ">
    <a className="navbar-brand d-flex justify-content-start px-2" href="#">
      <img src={logo} alt="logo" style={{height: "45px"}}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation" style={{backgroundColor: "transparent", border: "none"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end w-75" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel" style={{color: "var(--primary-color)"}}>Tron's Contructions</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 justify-content-end">
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#section" ><span className='insideH1'>Section</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#gallery" ><span className='insideH1'>Gallery</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#features" ><span className='insideH1'>Features</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    <main>
    {secList.map((section, ind) => <div key={ind} className="mb-5" >
      <div className='d-flex flex-column justify-content-center position-relative ' id='section'>
      
        <img src={section.hero} alt="hero" style={{height: '300px',  opacity: "0.7", objectFit: "cover"}} />
        
      <div className="d-flex justify-content-start w-100 position-absolute" >
            <h1 className="fw-bold text-light" style={{ borderTop: "6px solid #eedca3", margin: "60px"}}>
              {section.section}
            </h1>
          </div>
      </div>
      <h1 className='text-center m-5'>{section.section}</h1>
    </div>)}
      
      <div className='container '  data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-once='true' id='gallery'>
      {secList.map((sec, ind) => <Thumbsgallery key={ind} images={sec.images}/>)}
      </div>
  <div className="container py-4" id='features'>

    
    {secList.map((abt, ind) => <Designprocess key={ind} abt={abt}/>)}

    <hr />
    <div className='d-flex justify-content-center'>
    <button onClick={() => navigate(-1)} className='interiorBtn' style={{boxShadow: "5px 5px 0.6rem black"}}>Home</button>
    </div>
  </div>
</main>
    <Footer />
    </div>
  )
}

export default Sections;