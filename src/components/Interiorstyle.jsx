import React, { useContext, useEffect } from 'react'
import Interiormatch from './Interiormatch'
import { sectionStore } from '../App'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Interiorstyle = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])

    const {interiorList} = useContext(sectionStore)
  return (
    <div>
        
        <div className="album py-5">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
        {interiorList.map((interior, ind) => <div key={ind} className="col" data-aos='fade-up'>
          <div className="card shadow border-0">
              <Interiormatch interior={interior}/>
          </div>
        </div>)}
      </div>
    </div>
  </div>
  <div className='d-flex justify-content-center mt-5 mb-5' data-aos="fade-left"  data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-once='true' style={{height: "100%"}}>
        <div style={{width: "100%", height: "100%"}}>
            <img src="https://zocohome.com/cdn/shop/files/zoco-home-design-book-arranging-things-51810130002263.jpg?v=1689949148&width=1800" alt="check-hero" style={{width: "100%", objectFit: "contain"}} />
        </div>
    </div> 
    </div>
  )
}

export default Interiorstyle