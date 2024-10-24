import React from "react";
import Button from "../Ui/Buttons/Button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/Data/Index";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer id="#" className="w-full pt-20 pb-10">
      <div className="absolute w-full left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-70"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-center text-white-200 md:mt-10 my-5 lg:max-w-[45vw] ">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <Link target="_blank" href="mailto:yogesh.dhengale15@gmail.com">
          <Button icon={<FaLocationArrow />} position="right">
            Let&apos;s get in touch
          </Button>
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col gap-6 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Yogesh Dhengale
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link key={profile.id} href={profile.link} target="_blank" className="w-10 h-10 cursor-pointer flex-center backdrop-filter backdrop-blur-lg saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <Image
                src={profile.img}
                alt={profile.img}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
