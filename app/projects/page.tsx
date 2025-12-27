import ProjectCard from "@/Components/ProjectCard/ProjectCard";
import { InView } from "@/Components/Ui/in-view";
import { projects } from "@/Data/Index";
import React from "react";

function page() {
  return (
    <>
      <div className="pb-10 pt-36">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="space-y-8">
            <h1 className="font-bold text-2xl mb-3 leading-tight">
              My Selected Works &apos;23 - &apos;Present
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              My journey in development has taught me a lot especially when it
              comes to designing and building impactful user interfaces. While
              I&apos;ve struggled at times, those challenges have shaped my skills
              and helped me successfully deliver multiple projects. I don&apos;t
              claim that my past work is the best, but I stand by my commitment
              to continuous improvement. With the right opportunity, I am
              confident I can create even more refined, intuitive, and
              high-quality UI/UX.
              <br />
              <strong>All I need is a chance to prove it</strong>.
            </p>
          </div>
        </InView>
      </div>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="bg-border -mx-1 my-1 h-px mt-6"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 row-gap-8 gap-6 mt-16 w-full">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </>
  );
}

export default page;
