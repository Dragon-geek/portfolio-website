import React, { useRef } from "react";
import "./Projects.css";

import ProjectCard from "../ProjectCard/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PROJECTS = [
    {
        title: "Dungeon Mania",
        lang: ["Java"],
        details: [
            "An adventure game features different levels, enemies, and items deploying object-oriented programming in Java.",
            "Factory Method: Used for creating each of the game entities.",
            "Strategy Pattern: Groups entities with similar behaviors.",
            "Composite Pattern: Stacks up armor and attack damages from all types of equipment.",
            "State Pattern: Handles each type of potion.",
            "Abstract Factory: Creates goals according to the map specification."
        ],
    },
    {
        title: "Airbnb Clone",
        lang: ["React", "Javascript", "HTML", "CSS"],
        details: [
            "A web application emulates functionality and layout of Airbnb leverage HTML, CSS, JavaScript, and React.",
            "Ensured the application is responsive across various devices (desktop, tablet, mobile).",
            "Features such as search filters, reviews, or user profiles were implemented.",
            "Made using Google Material UI Designs."
        ],
    },
    {
        title: "Pokédex",
        lang: ["C", "Linked List"],
        details: [
            "A program that stores and displays information about Pokemon operating on linked list data structure in C.",
            "Dynamic memory allocation: Linked lists allow adding or removing Pokémon without shifting other elements.",
            "Efficient insertion and deletion: No need to shift elements like in an array.",
        ],
    },
    {
        title: "Messaging Application",
        lang: ["Python", "Flask", "API"],
        details: [
            "A messaging system API handles user authentication, chat rooms, and messages using Python and Flask.",
            "Helped in understanding of RESTful APIs and HTTP methods.",
            "Wrote unit tests for API endpoints.",
            "Collaborated with team members.",
        ],
    },
    {
        title: "Course Recommendations System",
        lang: ["Python", "Research", "Web-Design"],
        details: [
            "A research project delving deep into different algorithms used by popular companies.",
            "Investigated collaborative filtering and content-based filtering approaches.",
            "Explored hybrid recommender systems that combine multiple techniques.",
            "Conducted a systematic literature review of relevant studies.",
            "Contributed to the understanding of evidence-based practices.",
        ],
    },
];

const Projects = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section id="projects">
            <div className="Project-container">
                <div className="Project-list">
                    <div className="Project-Header">Projects</div>
                    <div className="Project-text">Displayed below are a selection of projects that exemplify my skills and experience.</div>
                    <div className="experience-content">
                        <div className="arrow-right" onClick={slideRight}>
                            <span class="material-symbols-outlined">chevron_right</span>
                        </div>

                        <div className="arrow-left" onClick={slideLeft}>
                            <span class="material-symbols-outlined">chevron_left</span>
                        </div>

                        <Slider ref={sliderRef} {...settings}>
                            {PROJECTS.map((item) => (
                                <ProjectCard key={item.title} details={item} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
