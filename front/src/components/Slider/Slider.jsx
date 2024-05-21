import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Slider.scss"

export default function Slider() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                loop={true}
                speed={1200}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                autoplay={{ delay: 2000 }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440%20(15)_1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440_1083.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440_1133.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440_1131.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440_1095.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440_1067.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440_1077.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248x440_1080.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://skin.comfy.ua/media/slider/248%D1%85440_157.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
