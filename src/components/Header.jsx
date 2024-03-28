import React from 'react'
import logo from '../assets/logotc.png'

// #4f4432 text active
//#a99c70 hover
const Header = ({children}) => {
  return (
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
          
          {children}
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header