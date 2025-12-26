import About from "@/Components/About/About";
import Approach from "@/Components/Approach/Approach";
import Experience from "@/Components/Experience/Experience";
import Hero from "@/Components/Hero/Hero";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Approach />
    </>
  );
}

export default Home;
