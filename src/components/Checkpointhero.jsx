import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Checkpointhero = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 200,
          });
    }, [])
  return (
    <>
    <h1 className='text-center m-5 text-light' style={{textDecoration: "underline"}}>Design behind boundaries</h1>
    <div className='d-flex justify-content-center' data-aos="fade-up" style={{height: "100%"}}>
        <div style={{width: "60%", height: "100%"}}>
            <img src="https://i.pinimg.com/originals/ed/2b/b4/ed2bb465e08b252525d65748fb7bfff3.jpg" alt="check-hero" style={{height: "100%", width: "100%", objectFit: "contain"}} />
        </div>
    </div>
    </>
    
  )
}

export default Checkpointhero