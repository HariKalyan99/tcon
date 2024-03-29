import React, { useContext } from 'react'
import Header from './Header'
// import { Link, useNavigate } from 'react-router-dom'
import { sectionStore } from '../App'
import Footer from './Footer'
import Thumbsgallery from './Thumbsgallery'


const Sections = () => {

    const {getSectioning, secList} = useContext(sectionStore);

    // const navigate = useNavigate();
  return (
    <div>
        <Header>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#" ><span className='insideH1'>Section</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#aboutus" ><span className='insideH1'>Gallery</span></a></li>
        <li className="nav-item ln  px-4"><a className=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
        <li className="nav-item ln  px-4"><a href={"/"} className=" navigateLink"  ><span className='insideH1'>Home</span></a></li>
    </Header>
    <main>

    {secList.map((section, ind) => <div key={ind} className="mb-5 ">
      <div className='d-flex flex-column justify-content-center position-relative' >
        <img src={section.hero} alt="hero" style={{width: '100%', opacity: "0.7"}} />
      <div className="d-flex justify-content-start w-100  position-absolute" >
            <h1 className="fw-bold text-light m-5" style={{ borderTop: "5px solid #c7b888"}}>
              Home Storages
            </h1>
          </div>
      </div>
    </div>)}
      <div className='container'>
      <Thumbsgallery />
      </div>
  <div className="container py-4">


    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>


  </div>
</main>
    <Footer />
    </div>
  )
}

export default Sections;