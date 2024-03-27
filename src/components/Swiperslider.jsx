import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "../App.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        style={{
            '--swiper-navigation-color': 'var(--primary-color)',
            '--swiper-pagination-color': 'var(--primary-color)',
            marginTop: "50px"
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
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide style={{backgroundImage: "url('https://cdn.houseplansservices.com/product/9qnpgt7tkh137emfrnf9mrf2fl/w800x533.JPG?v=12')", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{backgroundImage: "url('https://cdn.houseplansservices.com/product/djsh6nue1jo947jj91o23jlcqd/w800x533.jpg?v=2')", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
