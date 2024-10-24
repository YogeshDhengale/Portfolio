import React from "react";
import BentoGrid, { BentoGridItem } from "../Ui/BentoGrid/BentoGrid";
import { gridItems } from "@/Data/Index";
// import SkillCard from "../Ui/SkillCard/SkillCard";

function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem key={item.id} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
