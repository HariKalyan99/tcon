import React, { useEffect, useState } from "react";
import hero1 from "../assets/5.png";
import hero2 from "../assets/66.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Jumbotron = () => {
  const [read, setRead] = useState(false);



  const handleRead = () => {
    setRead(!read);
  };
  return (
    <>
      <div
        class="h-50 m-4 p-2"
        style={{
          borderRight: "1px solid var(--background-color)",
          color: "var(--primary-color-hover)",
        }}
      >
        <p>
          Welcome to Tron's constructions, where we specialize in creating
          captivating interiors and exteriors. With a focus on innovation and
          design excellence,
          {!read && (
            <span className="sp" onClick={() => handleRead()}>
              {" "}
              Read more...
            </span>
          )}{" "}
          {read && (
            <span onClick={() => handleRead()}>
              we transform spaces into stunning showcases of modern living.
              Whether it's crafting inviting interiors that reflect your unique
              style or designing striking exteriors that leave a lasting
              impression, we're here to turn your vision into reality.
              Experience the perfect blend of creativity and functionality with
              Tron's constructions.
            </span>
          )}
          {read && (
            <span className="sp" onClick={() => handleRead()}>
              {" "}
              close
            </span>
          )}
        </p>
      </div>
      <div className='d-flex justify-content-center mt-5 mb-5' data-aos="fade-right"  data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-once='true' style={{height: "100%"}}>
        <div style={{width: "100%", height: "100%"}}>
            <img src={hero1} alt="check-hero" style={{width: "100%", objectFit: "contain"}} />
            <div style={{backgroundColor: "white", height: "100%", width: "20%", position: "absolute", zIndex: "5", top: 0, left: 0}}>
            </div>
            <div style={{backgroundColor: "white", height: "60%", width: "35%", position: "absolute", zIndex: "10", top: "20%", left: "3%"}}>
                <h1 className="fw-bold" style={{color: "var(--primary-color-hover)"}}>Your Home, </h1>
                <h1 className="fw-bold" style={{color: "var(--primary-color-hover)", lineHeight: "1rem"}}>Your Haven.</h1>
                <p className="fw-light" style={{color: "var(--primary-color)", padding:"10%", marginTop: "10%", fontSize: "larger"}}>In today's dynamic world, the importance of living in a modern house cannot be overstated. Modern homes epitomize efficiency, integrating energy-saving technologies and smart home features that not only streamline daily life but also reduce environmental impact. </p>
            </div>
        </div>
    </div>
   
    <div className='d-flex justify-content-center mt-5 mb-5' data-aos="fade-left"  data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-once='true' style={{height: "100%"}}>
        <div style={{width: "100%", height: "100%"}}>
            <img src={hero2} alt="check-hero" style={{width: "100%", objectFit: "contain"}} />
            <div style={{backgroundColor: "white", height: "100%", width: "40%", position: "absolute", zIndex: "5", top: 0, right: 0}}>
            </div>
        </div>
    </div> 
      {/* <main style={{ marginTop: "20px" }} id="aboutus" data-aos="fade-right"  data-aos-easing="ease-in-sine" data-aos-duration="800" data-aos-once='true'>
          <img src={hero1} alt="hero"  style={{width: "100%"}}/>
      </main>
      <main style={{ marginTop: "50px" }} data-aos="fade-left"  data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once='true'>
          <img src={hero2} alt="hero"  style={{width: "100%"}}/>
      </main> */}
    </>
  );
};

export default Jumbotron;
