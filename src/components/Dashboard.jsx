import React, { useEffect, useRef } from "react";
import Jumbotron from "./Jumbotron";
import Stratergy from "./Stratergy";
import SwiperSlider from "./Swiperslider";
import gif from '../assets/vid.gif'
import Header from "./Header";
import Footer from "./Footer";
import Interiorstyle from "./Interiorstyle";
import Checkpointhero from "./Checkpointhero";
import Workgallery from "./Workgallery";


const Dashboard = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 100)
  }, ["/"]);

  return (
    <div className="dashboard" id="aboutus">
      <Header />
      <main className="videoDimensions" >
      <div className="position-relative overflow-hidden text-center bg-body-light h-100" >
        <img src={gif} alt="background" style={{ width: "100%",  position: "absolute", top: 0, left: 0, zIndex: "10", opacity: "0.7"}}/>
        <div className="col-md-6 p-lg-5 mx-auto mt-5" style={{position: "relative", zIndex: "100"}}>
          <h1 className="display-3 fw-bold "
            style={{ color: "var(--primary-color)" }}
          >
            Building Dreams, One Brick at a Time 
          </h1>
          <p className="fw-bold" style={{ color: "white", textDecoration: "underline"}}>
            Crafting Homes, Creating Memories
          </p>
        </div>
      </div>
    </main>
    <Jumbotron />
    <SwiperSlider />
    <Checkpointhero />
    <Stratergy />
    <Interiorstyle />
    <Workgallery />
    <Footer />
    </div>
  );
};

export default Dashboard;
