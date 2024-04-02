import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import herocon3 from '../assets/herocon3.png'

const Checkpointhero = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])
  return (
    <>
    <hr />
    <h1 className='text-center m-5 text-light' style={{textDecoration: "underline"}}>Design beyond boundaries</h1>
    <div className='d-flex justify-content-center shadow' data-aos="fade-up" style={{height: "100%"}}>
        <div style={{width: "100%", height: "100%",backgroundColor: "rgba(20, 10, 0, 0.3)"}}>
            <img src="https://milehighcre.com/wp-content/uploads/2023/03/pexels-mikael-blomkvist-8961130-scaled.jpg" alt="check-hero" style={{height: "100%", width: "100%", objectFit: "contain", position: "relative", zIndex: "-1"}}  />
            <div style={{backgroundColor: "white", height: "50%", width: "30%", position: "absolute", zIndex: "10", top: "30%", right: "0"}}>
                <img src={herocon3} alt="hero-content" style={{objectFit: "cover",height: "80%", margin: "10% 0 10% 5%"}}/>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Checkpointhero