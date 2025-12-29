import React from "react";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Link from "next/link";

interface IProjectProp {
  id: string;
  title: string;
  description: string;
  gitLink: string | null;
  liveLink?: string | null;
  images: {
    src: string;
    className: string;
    width: number;
    height: number;
  }[];
}

function ProjectCard({ project }: { project: IProjectProp }) {
  return (
    <Link href={`/projects/${project.id}`} className="w-full mb-8 group">
      <div className="mb-4 group-hover:underline">
        <h3 className="text-base font-semibold">{project.title}</h3>
      </div>
      <div onClick={(e) => e.stopPropagation()} className="rounded-xl max-w-full aspect-square bg-linear-180 from-[#7a19c4] via-[#460e70] to-[#430e6b]">
        <ProductCarousel images={project.images} />
      </div>
    </Link>
  );
}

export default ProjectCard;
