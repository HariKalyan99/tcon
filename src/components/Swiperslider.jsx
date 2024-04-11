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

export default function SwiperSlider() {
  
  const [read, setRead] = useState(false);

  const handleRead = () => {
    setRead(!read);
  }

  const {handleSection} = useContext(sectionStore)

  const swiperList = [{image: "https://www.realestate.com.au/news-image/w_1280,h_720/v1659868366/news-lifestyle-content-assets/wp-content/production/capi_fe9d4c09db29e7d81b0b40086c49fd3f_bf5b61cdb7c816dbb0878e3bc0f8445a.jpeg?_i=AA", heading: "Landscapes"},
  {image: "https://fancyhouse-design.com/wp-content/uploads/2023/11/The-L-shaped-sofa-positioned-atop-travertine-floors-anchors-the-living-room-in-contemporary-comfort..jpg", heading: "Hallways"},

  {image: "https://www.interiorstudio.in/assets/images/blog/KITCHEN__PUJA.jpg", heading: "Kitchens"},

  {image: "https://i.pinimg.com/736x/92/fc/a8/92fca821483fe0f384e8becf1ef40640.jpg", heading: "Bathrooms"},
  
  {image: "https://t3.ftcdn.net/jpg/05/92/84/02/360_F_592840219_Tvg2Ok1tb04uUmOqy7j2tfMruSFXXsus.jpg", heading: "Closets"},

  {image: "https://static.dezeen.com/uploads/2019/02/residence-xiao-apartment-taipei-taiwan-interiors-kc-design-studio_dezeen_1704_col_21.jpg", heading: "Home Storages"},

  {image: "https://www.decorilla.com/online-decorating/wp-content/uploads/2023/08/Master-bedroom-inspiration-for-a-luxurious-interior-design.jpg", heading: "Bedrooms"},
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
