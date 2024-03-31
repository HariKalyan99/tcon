import React, { useEffect, useState } from "react";
import hero1 from "../assets/5.png";
import hero2 from "../assets/6.png";
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
      <main style={{ marginTop: "20px" }} id="aboutus" data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once='true'>
        <div className="position-relative overflow-hidden text-center bg-body-light ">
          <img src={hero1} alt="hero"  style={{width: "100%"}}/>
        </div>
      </main>
      <main style={{ marginTop: "50px" }} data-aos="fade-zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-once='true'>
        <div className="position-relative overflow-hidden text-center bg-body-light ">
          <img src={hero2} alt="hero"  style={{width: "100%"}}/>
        </div>
      </main>
    </>
  );
};

export default Jumbotron;
