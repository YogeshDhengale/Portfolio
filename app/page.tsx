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
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
