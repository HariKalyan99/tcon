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
import { MdLocationPin } from "react-icons/md";
export default function Parallaxwork({ texts, screenHeight, contactTexts }) {
  if (screenHeight === "swiperSection") {
    return (
      <div >
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
          <div>
            
            </div>  
        </Swiper>

      </div>
    );
  } else if (screenHeight === "dashboard") {
    return (
      <div id="contact">
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
         <div className="textParallax" data-swiper-parallax="-100">
         <div>
         <p> <span className="fs-1">{contactTexts[0].heading} </span> <br />{contactTexts[0].text}</p>
                <a href="tel:+919148911954">
                  <button
                    className="interiorBtnModal"
                    style={{
                      boxShadow: "10px 5px 0.6rem black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Call
                    <MdOutlinePhoneAndroid />
                  </button>
                </a>
         </div>
              </div>
           
          </SwiperSlide>
          <SwiperSlide className="swiper-slideParallax">
             <div className="textParallax" data-swiper-parallax="-100">
             <div>
             <p> <span className="fs-1">{contactTexts[1].heading} </span> <br />{contactTexts[1].text}</p>
                <a href="mailto:makeartanhear8@gmail.com?cc=harikalyan91tron@gmail.com">
                  <button
                    className="interiorBtnModal"
                    style={{
                      boxShadow: "10px 5px 0.6rem black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Mail us@
                    <MdOutlineEmail />
                  </button>
                </a>
             </div>
              </div> 
          </SwiperSlide>
          <SwiperSlide className="swiper-slideParallax">
             <div className="textParallax" data-swiper-parallax="-100">
             <div>
             <p> <span className="fs-1">{contactTexts[2].heading} </span> <br />{contactTexts[2].text}</p>
             <a href="tel:+919148911954">
                  <button
                    className="interiorBtnModal"
                    style={{
                      boxShadow: "10px 5px 0.6rem black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Call
                    <MdOutlinePhoneAndroid />
                  </button>
                </a>
                <a href="mailto:makeartanhear8@gmail.com?cc=harikalyan91tron@gmail.com">
                  <button
                    className="interiorBtnModal mx-2"
                    style={{
                      boxShadow: "10px 5px 0.6rem black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Mail
                    <MdOutlineEmail />
                  </button>
                </a>
             </div>
                
              </div> 
          </SwiperSlide>
          <SwiperSlide className="swiper-slideParallax">
             <div className="textParallax" data-swiper-parallax="-100">
                <div>
                <p> <span className="fs-1">{contactTexts[3].heading} </span> <br />  {contactTexts[3].text}</p>
                <a href="mailto:makeartanhear8@gmail.com?cc=harikalyan91tron@gmail.com">
                  <button
                    className="interiorBtnModal"
                    style={{
                      boxShadow: "10px 5px 0.6rem black",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Careers 
                  </button>
                </a>
                </div>
              </div> 
          </SwiperSlide>
          <SwiperSlide className="swiper-slideParallax">
             <div className="textParallax" data-swiper-parallax="-100">
              <div>
             <p className="fs-4"> <span className="fs-1"><MdLocationPin />{contactTexts[4].heading} </span> <br />{contactTexts[4].text}</p></div>
              </div> 
          </SwiperSlide>

          <SwiperSlide className="swiper-slideParallax">
          <div className="textParallax" data-swiper-parallax="-100">
            <p className="fs-1">{contactTexts[5].heading}  {contactTexts[5].text}</p>
             </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
