import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Thumbsgallery.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Thumbsgallery({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    setImgList(images)
  })

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height: "575px",
          
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper21"
      >
        {imgList.map((img, ind) =>  <SwiperSlide key={ind}>
      <h1 className='position-absolute text-light bottom-0 mb-5 w-100 text-center'>{img.heading}</h1>
          <img src={img.img} alt={img.heading} />
        </SwiperSlide>)}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4.5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper11"
        style={{height: "100px"}}
      >
        {imgList.map((img, ind) =>  <SwiperSlide key={ind}>
          <img src={img.img} alt={img.heading}/>
        </SwiperSlide>)}
      </Swiper>

      <h1 className='text-center'>Why your home needs a feature.</h1>
    </>
  );
}
