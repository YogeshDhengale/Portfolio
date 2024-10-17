import Grid from "@/Components/Grid/Grid";
import Hero from "@/Components/Hero/Hero";
import FloatingNav from "@/Components/Ui/FloatingNav/FloatingNav";
import React from "react";
import { FaHome } from "react-icons/fa";

function Home() {
  return (
    <main className="relative bg-black-100 flex-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

export default Home;
