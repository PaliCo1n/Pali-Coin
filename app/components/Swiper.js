"use client";
import React from "react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImageCarousel = () => {
  return (
    <Swiper
      navigation
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop
      speed={2000}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      className="mb-10"
    >
      <SwiperSlide>
        <div className="h-[400px] relative">
          <Image
            src="/images/presentation5.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] relative">
          <Image
            src="/images/presentation1.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] relative">
          <Image
            src="/images/presentation2.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] relative">
          <Image
            src="/images/presentation3.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[400px] relative">
          <Image
            src="/images/presentation7.png"
            alt="PALI Coin Logo"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
