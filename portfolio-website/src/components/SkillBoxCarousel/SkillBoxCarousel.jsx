import React from "react";
import SkillBox from "../SkillBox/SkillBox";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import "./SkillBoxCarousel.css";

const SkillBoxCarousel = ({ skills }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{ dynamicBullets: true }}
            modules={[Autoplay, Pagination]}
        >
            {skills.map((skill, index) => (
                <SwiperSlide key={index}>
                    <div className="box">
                        <SkillBox
                            iconSrc={skill.iconSrc}
                            name1={skill.name1}
                            name2={skill.name2}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SkillBoxCarousel;
