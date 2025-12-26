import ProductCarousel from "@/Components/ProductCarousel/ProductCarousel";
import { Badge } from "@/Components/Ui/badge";
import { AwsDark } from "@/Components/Ui/svgs/awsDark";
import { AwsLight } from "@/Components/Ui/svgs/awsLight";
import { ClerkIconDark } from "@/Components/Ui/svgs/clerkIconDark";
import { Expo } from "@/Components/Ui/svgs/expo";
import { Expressjs } from "@/Components/Ui/svgs/expressjs";
import { ExpressjsDark } from "@/Components/Ui/svgs/expressjsDark";
import { Javascript } from "@/Components/Ui/svgs/javascript";
import { MongodbIconDark } from "@/Components/Ui/svgs/mongodbIconDark";
import { NextjsLogoDark } from "@/Components/Ui/svgs/nextjsLogoDark";
import { NextjsLogoLight } from "@/Components/Ui/svgs/nextjsLogoLight";
import { Nodejs } from "@/Components/Ui/svgs/nodejs";
import { ReactLight } from "@/Components/Ui/svgs/reactLight";
import { Tailwindcss } from "@/Components/Ui/svgs/tailwindcss";
import { Typescript } from "@/Components/Ui/svgs/typescript";
import { IProject, projects } from "@/Data/Index";
import { Code } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full mb-8 pb-10 pt-36 space-y-12">
      <div className="space-y-6">
        <h1 className="font-bold text-2xl mb-3 leading-tight">
          {project.title}
        </h1>
        <p className="text-base text-muted-foreground">{project.description}</p>
      </div>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="bg-border -mx-1 h-px"
      />
      <div className="gap-6 flex flex-wrap justify-between">
        <div>
          <h2 className="font-bold text-xl leading-tight">Industry</h2>
          <p className="text-base text-muted-foreground">{project.industry}</p>
        </div>
      </div>
      <div className="flex flex-wrap row-gap-2 column-gap-4">
        {project.tech.map((tech, idx) => {
          let Icon; 
          switch (tech.toLowerCase()) {
            case "react": 
                Icon = ReactLight;
                break;
            case "next.js":
                Icon = NextjsLogoDark;
                break;
            case "typescript":
                Icon = Typescript;
                break;
            case "javascript":
                Icon = Javascript;
                break;
            case "tailwindcss":
            case "tailwind":
                Icon = Tailwindcss;
                break;
            case "node.js":
            case "node":
                Icon = Nodejs;
                break;
            case "aws":
                Icon = AwsDark;
                break;
            case "expo":
                Icon = Expo;
                break;
            case "express.js":
            case "express":
                Icon = ExpressjsDark;
                break;
            case "mongodb":
                Icon = MongodbIconDark;
                break;
            case "clerk":
                Icon = ClerkIconDark;
                break;
            
            default:
                Icon = Code;
          }
          return (
            <Badge variant={"default"} key={idx} className="mr-2 px-3 mb-2 py-2 text-sm font-normal">
              <Icon className="mr-2" /> {tech}
            </Badge>
          );
        })}
      </div>
      <div className="rounded-xl max-w-full p-3 md:p-8 aspect-square bg-linear-180 from-[#7a19c4] via-[#460e70] to-[#430e6b]">
        <ProductCarousel images={project.images} />
      </div>
    </div>
  );
}

export default page;
