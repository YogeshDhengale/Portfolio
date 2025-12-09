import { workExperience } from "@/Data/Index";
import React from "react";
import Image from "next/image";
import { cn } from "@/Lib/Utils";
import { InView } from "../Ui/in-view";

const formatBold = (text: string) => {
  return text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
};

function Experience() {
  return (
    <section id="experience" className="space-y-8 mt-10 py-10">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="font-semibold text-lg text-muted-foreground">
          My Work Experience
        </h2>
      </InView>
      {workExperience.map((work) => (
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(7px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px", once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          key={work.id}
        >
          <div className="w-full">
            <div className="flex gap-6 justify-between items-center">
              <div className="flex gap-4 items-center">
                <div
                  className={cn(
                    "size-16 rounded-md overflow-hidden relative shadow-sm p-3 outline outline-4 border-2",
                    work.className
                  )}
                >
                  <Image
                    src={work.logo}
                    width={64}
                    height={64}
                    alt="yogesh"
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{work.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {work.company}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-end">
                  {work.duration}
                </p>
                <p className="text-xs text-muted-foreground text-end">
                  {work.location}
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-lg p-2 border border-border w-full bg-muted">
              <div className="p-6 bg-background rounded-md border border-border">
                <ul className="list-disc pl-4 space-y-3 text-sm text-muted-foreground">
                  {work.desc.map((point, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{ __html: formatBold(point) }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </InView>
      ))}
    </section>
  );
}

export default Experience;
