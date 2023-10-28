import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image1 from "./image1.jpg";
import image6 from "./image6.jpg";

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={image4} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={image5} alt="img" /></SwiperSlide>
        <SwiperSlide><img src={image6} alt="img" /></SwiperSlide>

      </Swiper>
    </>
  );
}

