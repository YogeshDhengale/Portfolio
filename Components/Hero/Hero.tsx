import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Spotlights from "../Spotlights/Spotlights";
import Button from "../Ui/Buttons/Button";
import TextGenerateEffect from "../Ui/TextGenerateEffect/TextGenerateEffect";

function Hero() {
  return (
    <div className="pb-20 pt-36">
      <Spotlights />
      <div className="h-screen w-full bg-app dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex-center">
        <div className="absolute pointer-events-none inset-0 flex-center bg-app [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89dvw] md:max-w-2xl lg:max-w-[60dvw] flex-center flex-col">
          <h3 className="tracking-widest uppercase text-xs text-center text-blue-100 max-w-80">
            Let&apos;s build something incredible together!
          </h3>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting Immersive Digital Experiences with 3D Design and Tailored Web Solutions."
          />
          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Yogesh a Software Engineer based in Pune, India
          </p>
          <a href="#about">
            <Button icon={<FaLocationArrow />} position="right">
              Show my work
            </Button>
          </a>
        </div>
      </div>


    </div>
  );
}

export default Hero;
