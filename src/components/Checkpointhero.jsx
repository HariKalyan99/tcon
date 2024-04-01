import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import herocon3 from '../assets/herocon3.png'

const Checkpointhero = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-sine',
            delay: 200,
          });
    }, [])
  return (
    <>
    <h1 className='text-center m-5 text-light' style={{textDecoration: "underline"}}>Design beyond boundaries</h1>
    <div className='d-flex justify-content-center' data-aos="fade-up" style={{height: "100%"}}>
        <div style={{width: "100%", height: "100%",backgroundColor: "rgba(0, 0, 0, 0.61)"}}>
            <img src="https://i.pinimg.com/originals/ed/2b/b4/ed2bb465e08b252525d65748fb7bfff3.jpg" alt="check-hero" style={{height: "100%", width: "100%", objectFit: "contain", boxShadow: "5px 5px 0.6rem var(--background-color)", position: "relative", zIndex: "-1"}}  />
            <div style={{backgroundColor: "white", height: "50%", width: "30%", position: "absolute", zIndex: "10", top: "30%", right: "10%"}}>
                <img src={herocon3} alt="hero-content" style={{objectFit: "cover",height: "80%", margin: "10% 10% 10% 15%"}}/>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Checkpointhero