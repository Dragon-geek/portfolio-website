import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import Work from "./components/Work/Work"

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Work />
    </>
  );
}

export default App;
