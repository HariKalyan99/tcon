import React from "react";
import Jumbotron from "./Jumbotron";
import Stratergy from "./Stratergy";
import SwiperSlider from "./Swiperslider";
import gif from '../assets/vid.gif'

const Dashboard = () => {
  return (
    <>
    <main style={{height: "75vh"}}>
      <div className="position-relative overflow-hidden text-center bg-body-light h-100" >
        <img src={gif} alt="background" style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: "-10", opacity: "0.7"}}/>
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1
            className="display-3 fw-bold mt-5 pt-5"
            style={{ color: "var(--background-color)" }}
          >
            Building Dreams, One Brick at a Time 
          </h1>
          <h3 className="fw-normal text-muted mb-3 ">
            Crafting Homes, Creating Memories
          </h3>
        </div>
      </div>
    </main>
    <Jumbotron />
    <Stratergy />
    <SwiperSlider />
    </>
  );
};

export default Dashboard;
