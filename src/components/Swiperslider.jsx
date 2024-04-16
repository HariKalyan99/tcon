import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../routes/App.css";


// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { sectionStore } from "../store/Tronsstore";
import Parallaxwork from "./Parallaxwork";
import swiper1 from '../assets/simg1.jpeg'
import swiper2 from '../assets/simg2.jpg'
import swiper3 from '../assets/simg3.jpg'
import swiper4 from '../assets/simg4.jpg'
import swiper5 from '../assets/simg5.jpg'
import swiper6 from '../assets/simg6.webp'
import swiper7 from '../assets/simg7.jpg'


export default function SwiperSlider() {
  
  const [read, setRead] = useState(false);

  const handleRead = () => {
    setRead(!read);
  }

  const {handleSection} = useContext(sectionStore)

  const swiperList = [{image: swiper1, heading: "Landscapes"},
  {image: swiper2, heading: "Hallways"},

  {image: swiper3, heading: "Kitchens"},

  {image: swiper4, heading: "Bathrooms"},
  
  {image: swiper5, heading: "Closets"},

  {image: swiper6, heading: "Home Storages"},

  {image: swiper7, heading: "Bedrooms"},
 ]



 const texts = [
  {text: "At Tron's constructions, our primary focus is on crafting exceptionalinteriors and exteriors that redefine modern living. With a passion for design innovation and meticulous attention to detail, we specialize in creating captivating spaces that seamlessly blend style, functionality, and comfort. "},
  {text: "From thoughtfully curated interiors that reflect your personality and lifestyle to striking exteriors that make a statement, we are committed to and design excellence delivering unparalleled craftsmanship"},
  {text: "Whether it's transforming a single room or an entire property, trust us to bring your vision to life with creativity, precision, and expertise. of interior and exterior design with Tron's constructions. Experience the perfect harmony"}
 ]

  return (
    <>
    <hr />
    <Parallaxwork texts={texts} screenHeight={"swiperSection"}/>
    <hr />
      <h1 className="text-center text-light" style={{textDecoration: "underline"}}>Constructing Creativity</h1>
      <Swiper
        slidesPerView={1}
        style={{
          "--swiper-navigation-color": "var(--background-color)",
          "--swiper-pagination-color": "var(--background-color)",
          marginTop: "50px",
          marginBottom: "50px",
          boxShadow: "5px 5px 0.6rem var(--background-color)",
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        id="product"
      >

  
        {swiperList.map((slide) => <SwiperSlide key={slide.image} onClick={() => handleSection(slide.heading)} >
          <div className="d-flex justify-content-center flex-column" >
            <Link to={"/sections"}>
              <img
                src={slide.image}
                alt={slide.heading}
                className="swiperImageScale"
              />
            </Link>
          </div>
          <div className="d-flex justify-content-center w-100" >
            <h1 className="fw-bold text-light bottom-0 position-absolute mb-5">
              {slide.heading}
            </h1>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </>
  );
}
