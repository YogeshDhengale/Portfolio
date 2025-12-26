"use client"

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../Ui/carousel";
import Image from "next/image";
import { cn } from "@/Lib/Utils";

const ProductCarousel = ({
  images,
}: {
  images: { src: string; className: string; width: number; height: number }[];
}) => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, idx) => (
          <CarouselItem
            key={idx}
            className="aspect-square max-h-full overflow-hidden"
          >
            <div className="p-4 size-full flex items-center justify-center">
              <Image
                src={image.src}
                className={cn(image.className, "rounded-lg ring-2 ring-border")}
                quality={100}
                width={image.width}
                height={image.height}
                alt={`image-${idx}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" onClick={(e) => e.stopPropagation()} />
      <CarouselNext className="right-1" onClick={(e) => e.stopPropagation()} />
    </Carousel>
  );
};

export default ProductCarousel;
