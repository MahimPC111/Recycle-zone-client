import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./Slider.css";
import img1 from '../../../../assets/banner/img-1.jpg'
import img2 from '../../../../assets/banner/img-2.jpg'
import img3 from '../../../../assets/banner/img-3.jpg'
import img4 from '../../../../assets/banner/img-4.jpg'
import img5 from '../../../../assets/banner/img-5.jpg'
import img6 from '../../../../assets/banner/img-6.jpg'
import img7 from '../../../../assets/banner/img-7.jpg'
import img8 from '../../../../assets/banner/img-8.jpg'
import img9 from '../../../../assets/banner/img-9.jpg'
import img10 from '../../../../assets/banner/img-10.jpg'
import Marquee from "react-fast-marquee";
import { FiBox } from 'react-icons/fi';

export default function Slider() {
    const sliderImage = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <div className="my-20 md:my-32 lg:my-48">
            <Marquee
                speed={100}
                pauseOnHover={true}
                gradientColor={[140, 85, 180]}
                style={{ fontSize: '25px', color: 'black' }}
            >
                <FiBox style={{ marginLeft: '50px', color: 'blue' }} /> Our upcoming products!  <FiBox style={{ marginLeft: '50px', color: 'blue' }} />Our upcoming products!  <FiBox style={{ marginLeft: '50px', color: 'blue' }} />Our upcoming products!   <FiBox style={{ marginLeft: '50px', color: 'blue' }} />Our upcoming products!
            </Marquee>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    sliderImage.map((image, i) => <SwiperSlide key={i}>
                        <img src={image} alt='' />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
}
