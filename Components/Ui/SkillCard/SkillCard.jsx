import Image from "next/image";
import React from "react";

function SkillCard({ img, title }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
      }}
      className="p-10 rounded-3xl"
    >
      <div className="flex-center flex-col px-10 py-10">
        <Image src={img} alt={title} width={50} height={50} />
      </div>
    </div>
  );
}

export default SkillCard;
