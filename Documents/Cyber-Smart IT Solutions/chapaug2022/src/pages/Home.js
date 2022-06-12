import React from 'react';
import styles from '../styles/Home.module.scss';
import '../styles/Home.css';
//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import img1 from '../images/slider1.jpg';
import img2 from '../images/slider2.jpg';
import img4 from '../images/slider4.jpg';

// import Swiper core and required modules
import { Navigation, EffectFade, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
const Home = () => {
  return (
    <div className={styles.container}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, EffectFade, Pagination]}
        navigation
        pagination={{ clickable: true }}
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <img src={img1} alt="slider" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src={img2} alt="slider" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src={img4} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
