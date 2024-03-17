import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import Work from "./components/Work/Work"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact";

import "./App.css";
import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     if (event.deltaY !== 0) {
  //       event.preventDefault();

  //       const scrollAmount = event.deltaY > 0 ? 1080 : -1080;
  //       const targetScroll = window.scrollY + scrollAmount;
  //       window.scrollTo({
  //         top: targetScroll,
  //         behavior: "smooth",
  //       });
  //     }
  //   };
  //   window.addEventListener("wheel", handleWheel);
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
