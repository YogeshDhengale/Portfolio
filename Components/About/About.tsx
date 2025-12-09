"use client";

import React from "react";
import { InView } from "../Ui/in-view";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  const images = [
    "/yogesh.jpg",
    "/yogesh-1.jpeg",
    "/yogesh-2.jpg",
    "/yogesh-3.jpg",
  ];
  return (
    <section id="about" className="space-y-8 pt-10">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <>
          <h2 className="font-semibold text-lg text-muted-foreground">
            About Me
          </h2>
          <h3 className="text-xl mt-4 font-semibold">
            I’m Yogesh Dhengale, a Full-Stack Developer weaving seamless
            interfaces, powerful backends, and cloud-ready experiences for the
            modern web and yes, I build mobile apps too, because great ideas
            deserve to run everywhere.
          </h3>
        </>
      </InView>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="flex justify-center gap-4 items-center">
          {images.map((image, idx) => (
            <motion.div
              key={"images" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-violet-100 dark:bg-neutral-800 shadow-xl dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="bali images"
                width="500"
                height="500"
                className="rounded-lg w-20 md:w-40 aspect-3/4 object-cover shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </InView>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="space-y-5 text-base text-muted-foreground">
          <p>
            Over 2.7 years of real-world experience (and many more years of
            fighting immortal bugs 🪲🔥), I build fast, scalable, and
            user-friendly products using the MERN stack, Java Spring Boot, AWS,
            CI/CD, and React Native. From optimizing Core Web Vitals to making
            SEO good enough for Google to notice, I love creating apps that stay
            smooth—even on painfully slow WiFi.
          </p>
          <p>
            I’ve worked across fintech, SaaS, and e-commerce, building systems
            that are reliable, accessible, and WCAG-compliant—because yes,
            accessibility matters. Whether it’s boosting performance, automating
            pipelines that deploy faster than my coffee kicks in ☕⚡, or
            surviving yet another Agile sprint, I enjoy turning complex ideas
            into clean, maintainable solutions.
          </p>
          <p>
            When I’m not coding, I’m exploring new tech, sketching UI ideas, or
            pretending I’ll finish that side project “next weekend” (one day, I
            swear 😄). If you’re looking for someone who blends engineering,
            optimization, mobile development, and humor—I’m your guy. 🚀
          </p>
        </div>
      </InView>
    </section>
  );
}

export default About;
