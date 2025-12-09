import Image from "next/image";
import React from "react";
import { InView } from "../Ui/in-view";
import Link from "../Ui/Link";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <div className="pb-10 pt-36">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <>
          <div className="flex gap-4 items-center mb-6">
            <div className="size-16 rounded-md overflow-hidden relative shadow-sm outline outline-4 outline-sky-700/30">
              <Image
                src="/yogesh.jpg"
                width={64}
                height={64}
                alt="yogesh"
                className="absolute -top-4"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Yogesh Dhengale</p>
              <p className="text-base text-muted-foreground">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-2xl mb-3 leading-tight">
              Software Engineer — Building Scalable Web & Mobile Apps
            </h1>
            <p className="text-base text-muted-foreground">
              I build magical user interfaces using{" "}
              <strong>
                React.js, Next.js, React Native, JavaScript, TypeScript, and a
                sprinkle of AWS + CI/CD
              </strong>
              . From wireframes to pixel-perfect screens, I turn ideas into
              interactive experiences that feel alive. UI isn’t just a layer for
              me — it’s the emotional connection users feel with the product.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            <Link
              href="mailto:yogesh.dhengale15@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Yogesh"
              className="col-span-1"
            >
              Hire Me
            </Link>
            <Link href="/resume.pdf" variant={"outline"} download className="col-span-1">
              <FaDownload /> Download Resume
            </Link>
          </div>
        </>
      </InView>
    </div>
  );
}

export default Hero;
