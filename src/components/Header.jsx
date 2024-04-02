import React from 'react'
import logo from '../assets/logotc.png'

// #4f4432 text active
//#a99c70 hover
const Header = () => {
  return (
    <nav className="navbar navbar-expand-md  sticky-top" data-bs-theme="dark" style={{backgroundColor: "var(--background-color)", border: "3px solid var(--primary-color)"}}>
  <div className="container-fluid ">
    <a className="navbar-brand d-flex justify-content-start px-2" href="#aboutus">
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
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#aboutus" ><span className='insideH1'>About us</span></a></li>
          <li className="nav-item ln  px-4"><a className=" navigateLink" href="#product" ><span className='insideH1'>Product</span></a></li>
          <li className="nav-item ln  px-4"><a className=" navigateLink" href="#features" ><span className='insideH1'>Features</span></a></li>
          <li className="nav-item ln  px-4"><a className=" navigateLink" href="#projects" ><span className='insideH1'>Projects</span></a></li>
          <li className="nav-item ln  px-4"><a className=" navigateLink" href="#support" ><span className='insideH1'>Support</span></a></li>
          <li className="nav-item ln  px-4"><a className=" navigateLink" href="#contact" ><span className='insideH1'>Contact us</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header