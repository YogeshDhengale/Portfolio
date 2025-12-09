import React from "react";
import Link from "../Ui/Link";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { InView } from "../Ui/in-view";

const socialMedia = [
  {
    id: 1,
    Icon: FaGithub,
    link: "https://github.com/YogeshDhengale",
  },
  {
    id: 2,
    Icon: FaInstagram,
    link: "https://www.instagram.com/yogesh.dhengale/",
  },
  {
    id: 3,
    Icon: FaLinkedin,
    link: "https://linkedin.com/in/yogeshdhengale",
  },
];

function Footer() {
  return (
    <footer id="#" className="w-full pt-20 pb-10">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="text-center max-w-lg mx-auto space-y-5">
          <p className="text-base text-muted-foreground">
            Ready to take your digital presence to the next level?
          </p>
          <p className="text-lg">
            Open for full-time roles, collabs, and freelance gigs basically
            anywhere I can build cool things and bully bugs into submission. If
            you like great code with a side of comedy, let’s create some digital
            magic. 🚀
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            <Link
              href="mailto:yogesh.dhengale15@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Yogesh"
              className="col-span-1"
            >
              Hire Me
            </Link>
            <Link
              href="/resume.pdf"
              variant={"outline"}
              download
              className="col-span-1"
            >
              <FaDownload /> Download Resume
            </Link>
          </div>
        </div>
      </InView>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="bg-border -mx-1 my-1 h-px mt-16"
      />
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="space-y-10 my-16">
          <div className="space-y-5">
            <p className="text-base text-center text-muted-foreground">
              Connect with me on
            </p>
            <div className="flex justify-center gap-6">
              {socialMedia.map((item, idx) => (
                <Link key={idx} href={item.link} size={"icon-lg"}>
                  <item.Icon />
                </Link>
              ))}
            </div>
          </div>
          <p className="text-base text-center text-muted-foreground">
            © 2024 Yogesh Dhengale. All rights reserved. | Made with ❤️ in India
          </p>
        </div>
      </InView>
    </footer>
  );
}

export default Footer;
