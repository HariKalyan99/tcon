import { Tooltip } from "antd";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projectcount from "./Projectcount";
import pic1 from "../assets/p1.jpg";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";
import pic4 from "../assets/p4.jpg";
import pic5 from "../assets/p5.jpg";
import pic6 from "../assets/p6.jpg";
import pic7 from "../assets/p7.jpg";
import pic8 from "../assets/p8.jpg";
import pic9 from "../assets/p9.jpg";
import { Image } from "antd";
import { Link } from "react-router-dom";

const Workgallery = () => {
  const workPics = [
    {
      photo: pic1,
    },
    {
      photo: pic2,
    },
    {
      photo: pic3,
    },
    {
      photo: pic4,
    },
    {
      photo: pic5,
    },
    {
      photo: pic6,
    },
    {
      photo: pic7,
    },
    {
      photo: pic8,
    },
    {
      photo: pic9,
    },
  ];
  return (
    <div
      className="container-fluid"
      style={{ borderBottom: "1px solid var(--primary-color-hover)" }}
      
    >
      <div
        className="h-100 w-100 position-relative"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        <div
          className="d-flex justify-content-center flex-column align-items-center mt-5 mb-5"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          data-aos-once="true"
          style={{ height: "100%" }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src="https://zocohome.com/cdn/shop/files/zoco-home-design-book-arranging-things-51810130002263.jpg?v=1689949148&width=1800"
              alt="check-hero"
              style={{
                width: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: "-1",
              }}
            />
          </div>
        </div>
        <div className="container w-100 h-100" id="projects">
          <Projectcount />
        </div>
      </div>
      <hr />
      <h1
        className="text-center text-light mt-5"
        style={{ textDecoration: "underline" }}
      >
        Photos Gallery
      </h1>
      <div className="album py-5" id="workgallery">
        <div
          className="container"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="100"
        >
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {workPics.map((photo, ind) => (
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
      </div>
      <div className="d-flex justify-content-center m-5">
      <Link to={"/worker-gallery"}>
      <button className='interiorBtn' style={{boxShadow: "10px 5px 0.6rem black"}}>
          Go to gallery
        </button>
      </Link>
      </div>
      <hr />
    </div>
  );
};

export default Workgallery;
