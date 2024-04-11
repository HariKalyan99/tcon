import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Parallaxwork.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
export default function Parallaxwork({ texts, screenHeight }) {
  if (screenHeight === "swiperSection") {
    return (
      <div>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
            height: `80vh`,
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay, Parallax, Pagination, Navigation]}
          className="mySwiperParallax"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <div
            slot="container-start"
            className="parallax-bgParallax"
            style={{
              "background-image": `url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          {texts.map((text, ind) => (
            <SwiperSlide key={ind} className="swiper-slideParallax">
              <div className="textParallax" data-swiper-parallax="-100">
                <p>{text.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  } else if (screenHeight === "dashboard") {
    return (
      <div>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
            height: "100vh",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Parallax, Pagination]}
          className="mySwiperParallax"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <div
            slot="container-start"
            className="parallax-bgParallax"
            style={{
              "background-image": `url('https://en.idei.club/uploads/posts/2023-12/1703070297_en-idei-club-p-pictures-of-black-houses-dizain-pinterest-4.jpg')`,
              opacity: "0.9",
                
            }}
            data-swiper-parallax="-23%"
          ></div>

          <SwiperSlide className="swiper-slideParallax">
          <h1 style={{ textAlign: "center", color: "var(--primary-color-hover)" }}>Building dreams, one project at a time. Connect with us to start yours!</h1>
            <div className="phoneParallax" data-swiper-parallax="-100">
              <div
                className="d-flex flex-wrap  text-light flex-column justify-content-center align-items-center"
                style={{
                  backgroundColor: "var(--background-color)",
                  boxShadow: "0px 0px 1rem black",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  minWidth: "300px",
                  width: "50%",
                  height: "50%",
                }}
              >
                <MdOutlinePhoneAndroid
                  size={200}
                  style={{ color: "var(--primary-color-hover)" }}
                />
                <h1 style={{ color: "var(--primary-color)" }}>
                  Ph: 9148911954
                </h1>
                <a href="tel:+919148911954">
                  <button
                    className="interiorBtnModal"
                    style={{
                      boxShadow: "10px 5px 0.6rem black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Call us
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slideParallax">
          <h1 style={{ textAlign: "center", color: "var(--primary-color-hover)" }}>Building dreams, one project at a time. Connect with us to start yours!</h1>
            <div className="phoneParallax" data-swiper-parallax="-100">
              <div
                className="d-flex flex-wrap  text-light flex-column justify-content-center align-items-center"
                style={{
                  backgroundColor: "var(--background-color)",
                  boxShadow: "0px 0px 3rem black",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  minWidth: "300px",
                  width: "50%",
                  height: "50%",
                }}
              >
                <MdOutlineEmail
                  size={200}
                  style={{ color: "var(--primary-color-hover)" }}
                />
                <h1 style={{ color: "var(--primary-color)" }}>
                  @:
                </h1>
                <a href="mailto:makeartanhear8@gmail.com?cc=harikalyan91tron@gmail.com">
                  <button
                    className="interiorBtnModal"
                    style={{
                      boxShadow: "10px 5px 0.6rem black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Mail Us
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
