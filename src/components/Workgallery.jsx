import { Tooltip } from 'antd'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Workgallery = () => {
  return (
   <div className='h-100 w-100 position-relative' style={{backgroundColor: "var(--background-color)"}}>
    <div className='d-flex justify-content-center mt-5 mb-5' data-aos="fade-left"  data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-once='true' style={{height: "100%"}}>
        <div style={{width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <img src="https://zocohome.com/cdn/shop/files/zoco-home-design-book-arranging-things-51810130002263.jpg?v=1689949148&width=1800" alt="check-hero" style={{width: "100%", objectFit: "contain", position: "relative", zIndex: "-1"}} />
        </div>
    </div> 
    <h1 className='text-center text-light' style={{textDecoration: "underline"}}>Photos Gallery</h1>
    <div class="album py-5">
    <div class="container" data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="200">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5" >
          {[1,2,3,4,5,6,7,8,9,0,11,23,34,45,221,29,45,67,89,98,76,55,43,22,11].map((photo, ind) => <Tooltip key={ind} placement='top' title="bengaluru">
        <div class="col" style={{boxShadow: '5px 5px 0.7rem var(--primary-color)'}} >
          <div class="card shadow" >
            <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" />
          </div>
        </div>
          </Tooltip>)}
      </div>
    </div>
  </div>
   </div>
  )
}

export default Workgallery