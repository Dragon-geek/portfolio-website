import React from "react";
import ProjectBox from "../ProjectBox/ProjectBox";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import "./ProjectBoxCarousel.css";

const ProjectBoxCarousel = ({ projects }) => {
    return (
        <Swiper
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{ dynamicBullets: true }}
            modules={[Autoplay, Pagination]}
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <div className="box">
                        <ProjectBox
                            imageSrc={project.imageSrc}
                            projectNum={project.projectNum}
                            projectName={project.projectName}
                            client={project.client}
                            date={project.date}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProjectBoxCarousel;
