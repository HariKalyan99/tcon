import React from "react";
import Jumbotron from "./Jumbotron";
import Stratergy from "./Stratergy";
import SwiperSlider from "./Swiperslider";
import gif from '../assets/vid.gif'
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
    <Header>
      <li class="nav-item ln  px-4"><a class=" navigateLink" href="#aboutus" ><span className='insideH1'>About us</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Product</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Features</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Enterprise</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Support</span></a></li>
          <li class="nav-item ln  px-4"><a class=" navigateLink" href="#" ><span className='insideH1'>Pricing</span></a></li>
      </Header>
    <main className="videoDimensions">
      <div className="position-relative overflow-hidden text-center bg-body-light h-100" >
        <img src={gif} alt="background" style={{ width: "100%",  position: "absolute", top: 0, left: 0, zIndex: "-10", opacity: "0.7"}}/>
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1 className="display-3 fw-bold text-muted"
            style={{ color: "var(--background-color)" }}
          >
            Building Dreams, One Brick at a Time 
          </h1>
          <h3 className="text-muted">
            Crafting Homes, Creating Memories
          </h3>
        </div>
      </div>
    </main>
    <Jumbotron />
    <SwiperSlider />
    <Stratergy />
    <Footer />
    </>
  );
};

export default Dashboard;
