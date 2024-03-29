import React, { useState } from "react";
import hero1 from "../assets/5.png";
import hero2 from "../assets/6.png";

const Jumbotron = () => {
  const [read, setRead] = useState(false);


  const handleRead = () => {
    setRead(!read);
  }
  return (
    <>
      <div class="h-50 p-5 m-5" style={{borderRight: "1px solid var(--primary-color)"}}>
        <p >
        Welcome to Tron's constructions, where we specialize in creating captivating interiors and exteriors. With a focus on innovation and design excellence,{!read && <span className="sp" onClick={() => handleRead()}> Read more...</span>} {read && <span onClick={() => handleRead()}>we transform spaces into stunning showcases of modern living. Whether it's crafting inviting interiors that reflect your unique style or designing striking exteriors that leave a lasting impression, we're here to turn your vision into reality. Experience the perfect blend of creativity and functionality with Tron's constructions.</span>}
        {read && <span className="sp" onClick={() => handleRead()}> close</span>}
        </p>
      </div>
      {/* <div
        className="position-relative overflow-hidden text-center bg-body-light"
        style={{ height: "100vh" }}
      >
        <img src={hero} alt="hero" style={{ width: "100%" }} />
      </div> */}
<main style={{ marginTop: "20px"}} id="aboutus">
  <div className="position-relative overflow-hidden text-center bg-body-light ">
  <img src={hero1} alt="hero"  className="imghov"/>
  </div>
</main>
<main style={{ marginTop: "40px"}}>
  <div className="position-relative overflow-hidden text-center bg-body-light ">
  <img src={hero2} alt="hero"  className="imghov"/>
  </div>
</main>
    </>
  );
};

export default Jumbotron;
