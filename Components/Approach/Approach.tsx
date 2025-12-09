import React from "react";
import { InfiniteSlider } from "../Ui/infinite-slider";
import { projectImages } from "@/Data/Index";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

function Approach() {
  return (
    <section id="approach" className="relative mt-10">
      <h2 className="font-semibold text-lg text-center text-muted-foreground inline-flex gap-3">
        Applications designed and developed by me. I love to converting ideas to{" "} Design and then Code
        with ❤️
      </h2>
      <div className="relative w-screen -left-[calc(50vw-50%)] mt-6">
        <InfiniteSlider speedOnHover={20} gap={24}>
          <>
            {projectImages.map((src, idx) => (
              <div
                key={idx}
                className="aspect-3/4 w-96 relative bg-muted rounded-2xl shadow overflow-hidden border border-neutral-100 dark:border-neutral-800"
              >
                <Image
                  src={src}
                  alt={`Project image ${idx + 1}`}
                  width={192}
                  height={342}
                  className="w-56 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline-4 rounded-xl outline-muted-foreground/20"
                />
              </div>
            ))}
          </>
        </InfiniteSlider>
      </div>
    </section>
  );
}

export default Approach;
