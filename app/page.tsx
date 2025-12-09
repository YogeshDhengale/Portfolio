import About from "@/Components/About/About";
import Approach from "@/Components/Approach/Approach";
import Experience from "@/Components/Experience/Experience";
import Footer from "@/Components/Footer/Footer";
import Grid from "@/Components/Grid/Grid";
import Hero from "@/Components/Hero/Hero";
import Projects from "@/Components/Projects/Projects";
import FloatingNav from "@/Components/Ui/FloatingNav/FloatingNav";
import { navItems } from "@/Data/Index";
import React from "react";

function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-3xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Projects /> */}
        <About />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
