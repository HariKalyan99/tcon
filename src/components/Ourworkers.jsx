import React, { useEffect } from "react";
import logo from '../assets/logotc.png'
import { Image, Tooltip } from "antd";
import { Link } from "react-router-dom";
const Ourworkers = () => {
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
        <div
          className="container-fluid"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="100"
        >
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((photo, ind) => (
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
                        src="https://zocohome.com/cdn/shop/files/zoco-home-design-book-arranging-things-51810130002263.jpg?v=1689949148&width=1800"
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
      </div>
    </div>
  );
};

export default Ourworkers;
