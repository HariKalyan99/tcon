import React, { useEffect, useState } from "react";
import logo from '../assets/logotc.png'
import { Image, Tooltip } from "antd";
import { Link } from "react-router-dom";
import p1 from '../assets/p (1).jpg'
import p2 from '../assets/p (2).jpg'
import p3 from '../assets/p (3).jpg'
import p4 from '../assets/p (4).jpg'
import p5 from '../assets/p (5).jpg'
import p6 from '../assets/p (6).jpg'
import p7 from '../assets/p (7).jpg'
import p8 from '../assets/p (8).jpg'
import p9 from '../assets/p (9).jpg'
import p10 from '../assets/p (10).jpg'
import p11 from '../assets/p (11).jpg'
import p12 from '../assets/p (12).jpg'
import p13 from '../assets/p (13).jpg'
import p14 from '../assets/p (14).jpg'
import p15 from '../assets/p (15).jpg'
import p16 from '../assets/p (16).jpg'
import p17 from '../assets/p (17).jpg'
import p18 from '../assets/p (18).jpg'
import p19 from '../assets/p (19).jpg'
import p20 from '../assets/p (20).jpg'
import p21 from '../assets/p (21).jpg'
import p22 from '../assets/p (22).jpg'
import p23 from '../assets/p (23).jpg'
import p24 from '../assets/p (24).jpg'
import p25 from '../assets/p (25).jpg'
import p26 from '../assets/p (26).jpg'
import p27 from '../assets/p (27).jpg'
import p28 from '../assets/p (28).jpg'
import p29 from '../assets/p (29).jpg'
import p30 from '../assets/p (30).jpg'
import p31 from '../assets/p (31).jpg'
import p32 from '../assets/p (32).jpg'
import p33 from '../assets/p (33).jpg'
import p34 from '../assets/p (34).jpg'
import p35 from '../assets/p (35).jpg'
import p36 from '../assets/p (36).jpg'
import p37 from '../assets/p (37).jpg'
import p38 from '../assets/p (38).jpg'
import p39 from '../assets/p (39).jpg'
import p40 from '../assets/p (40).jpg'
import p41 from '../assets/p (41).jpg'
import p42 from '../assets/p (42).jpg'
import Footer from "./Footer";


const Ourworkers = () => {

  const gallery = [
    {photo: p1},
    {photo: p2},
    {photo: p3},
    {photo: p4},
    {photo: p5},
    {photo: p6},
    {photo: p7},
    {photo: p8},
    {photo: p9},
    {photo: p10},
    {photo: p11},
    {photo: p12},
    {photo: p13},
    {photo: p14},
    {photo: p15},
    {photo: p16},
    {photo: p17},
    {photo: p18},
    {photo: p19},
    {photo: p20},
    {photo: p21},
    {photo: p22},
    {photo: p23},
    {photo: p24},
    {photo: p25},
    {photo: p26},
    {photo: p27},
    {photo: p28},
    {photo: p29},
    {photo: p30},
    {photo: p31},
    {photo: p32},
    {photo: p33},
    {photo: p34},
    {photo: p35},
    {photo: p36},
    {photo: p37},
    {photo: p38},
    {photo: p39},
    {photo: p40},
    {photo: p41},
    {photo: p42},
  ]

  const [read, setRead] = useState(false);



  const handleRead = () => {
    setRead(!read);
  };
    useEffect(() => {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }, 100)
  
        window.onbeforeunload = () => { return "" };
          
      // Unmount the window.onbeforeunload event
      return () => { window.onbeforeunload = null };
        
      }, ["/work-gallery"]);
  return (
    <div>
      <nav
        className="navbar navbar-expand-md  sticky-top"
        data-bs-theme="dark"
        style={{
          backgroundColor: "var(--background-color)",
          border: "3px solid var(--primary-color)",
        }}
      >
        <div className="container-fluid ">
          <Link
            className="navbar-brand d-flex justify-content-start px-2"
            to={"/"}
          >
            <img src={logo} alt="logo" style={{ height: "45px" }} />
          </Link>
        </div>
      </nav>
      <div className="album py-5" style={{backgroundColor: "rgb(79,68,50)"}}>
      <h1 className="text-center text-light mb-5" style={{textDecoration: "underline"}}>Construction gallery</h1>

      <div
        className="h-50 mt-2 container p-2 text-center"
        style={{

          color: "var(--primary-color)",
        }}
      >
        <p>
        In essence, laborers are the backbone of the construction industry, turning architectural visions into tangible structures through their expertise, hard work, and dedication. Without them, construction projects simply wouldn't be possible.
          {!read && (
            <span className="sp" onClick={() => handleRead()}>
              {" "}
              Read more...
            </span>
          )}{" "}
          {read && (
            <span onClick={() => handleRead()}>
              Construction is a collaborative effort that requires effective communication and teamwork among laborers, supervisors, engineers, and other professionals. Workers contribute not only their individual skills but also their ability to work together toward a common goal.
            </span>
          )}
          {read && (
            <span className="sp" onClick={() => handleRead()}>
              {" "}
              close
            </span>
          )}
        </p>
      <hr />
      </div>

        <div
          className="container-fluid"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="100"
        >
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
            {gallery.map((photo, ind) => (
              <Tooltip key={ind}>
                <div className="col">
                  <div
                    style={{
                      boxShadow: "10px 10px .8rem var(--background-color)",
                    }}
                  >
                    <div className="card shadow h-100 w-100">
                      <Image
                        style={{
                          height: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={photo.photo}
                      />
                    </div>
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
            
            <div className="d-flex justify-content-center m-5">
            <Link to={"/"}>
      <button className='interiorBtn' style={{boxShadow: "10px 5px 0.6rem black"}}>
          Go to Home
        </button>
      </Link>
            </div>
      <Footer />
      </div>
    </div>
  );
};

export default Ourworkers;
