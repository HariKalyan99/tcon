import React from 'react'
import logo from '../assets/logotc.png'
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="container-fluid py-5">
      <hr style={{color: "var(--primary-color)"}}/>
  <div className="row">
    <div className="col-12 col-md">
    <a className="navbar-brand d-flex justify-content-start px-2" href="#">
      <img src={logo} alt="logo" style={{height: "50px"}}/>
    </a>
    </div>
     <div className="col-6 col-md">
      <h5>2021, Tron's constructions©</h5>
      <p>All rights reserved</p>
      <a href='https://www.instagram.com/' target='_blank' style={{color: "black"}}><PiInstagramLogoFill size={30}/></a>
    <a href='https://www.facebook.com/' target='_blank' style={{color: "black"}}><BsFacebook size={30}/></a>
    <a href='https://www.pinterest.com/' target='_blank' style={{color: "black"}}><BsPinterest size={30}/></a>
    <a href='https://www.twitter.com/' target='_blank' style={{color: "black"}}><BsTwitterX size={30}/></a>
    <a href='https://www.linkedin.com/' target='_blank' style={{color: "black"}}><AiFillLinkedin size={30}/></a>
    </div> 
   

    {/*<div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary text-decoration-none" href="#">Business</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Education</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Government</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Gaming</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary text-decoration-none" href="#">Team</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
        <li><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
      </ul>
    </div> */}
  </div>
</footer>
  )
}

export default Footer