import { workExperience } from "@/Data/Index";
import React from "react";
import MovingBorderCard from "../Ui/MovingBorderCard/MovingBorderCard";

function Experience() {
  return (
    <section id="experience">
      <div className="w-full py-20">
        <h1 className="heading">
          My <span className="text-purple">work experience</span>
        </h1>
        <div className="w-full mt-12 lg:grid-cols-4 grid gid-cols-1 gap-10">
          {workExperience.map((card) => (
            <MovingBorderCard
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgb(4, 7, 29) 0%, rgb(12, 14, 35) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white mt-1 font-semibold">
                    {card.company} <span className="italic text-purple">{card.duration}</span>
                  </p>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </MovingBorderCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
