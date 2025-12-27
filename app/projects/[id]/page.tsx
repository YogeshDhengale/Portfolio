import ProductCarousel from "@/Components/ProductCarousel/ProductCarousel";
import { Badge } from "@/Components/Ui/badge";
import { InView } from "@/Components/Ui/in-view";
import { AwsDark } from "@/Components/Ui/svgs/awsDark";
import { ClerkIconDark } from "@/Components/Ui/svgs/clerkIconDark";
import { Expo } from "@/Components/Ui/svgs/expo";
import { ExpressjsDark } from "@/Components/Ui/svgs/expressjsDark";
import { GithubDark } from "@/Components/Ui/svgs/githubDark";
import { GithubLight } from "@/Components/Ui/svgs/githubLight";
import { Javascript } from "@/Components/Ui/svgs/javascript";
import { MongodbIconDark } from "@/Components/Ui/svgs/mongodbIconDark";
import { NextjsLogoDark } from "@/Components/Ui/svgs/nextjsLogoDark";
import { Nodejs } from "@/Components/Ui/svgs/nodejs";
import { Prisma } from "@/Components/Ui/svgs/prisma";
import { ReactLight } from "@/Components/Ui/svgs/reactLight";
import { Tailwindcss } from "@/Components/Ui/svgs/tailwindcss";
import { Typescript } from "@/Components/Ui/svgs/typescript";
import { projects } from "@/Data/Index";
import { Code, Globe } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import type { ComponentType, SVGProps } from "react";

const TECH_ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  react: ReactLight,
  "next.js": NextjsLogoDark,
  typescript: Typescript,
  javascript: Javascript,
  tailwindcss: Tailwindcss,
  tailwind: Tailwindcss,
  "node.js": Nodejs,
  node: Nodejs,
  aws: AwsDark,
  expo: Expo,
  "express.js": ExpressjsDark,
  express: ExpressjsDark,
  mongodb: MongodbIconDark,
  clerk: ClerkIconDark,
  github: GithubDark,
  git: GithubDark,
  prisma: Prisma,
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full mb-8 pb-10 pt-36 space-y-12">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="space-y-6">
          <h1 className="font-bold text-2xl mb-3 leading-tight">
            {`${project.title}`}
          </h1>
          <p className="text-base text-muted-foreground">
            {`${project.description}`}
          </p>
          <div>
            <div className="flex gap-4 flex-wrap">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center px-4 py-2 rounded-full border border-border hover:bg-accent text-muted-foreground hover:text-foreground transition-colors text-base font-medium [&>svg]:size-4 [&>svg]:mr-2"
                >
                  Live At <Globe />
                </Link>
              )}
              {project.gitLink && (
                <Link
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center px-4 py-2 rounded-full border border-border hover:bg-accent text-muted-foreground hover:text-foreground transition-colors text-base font-medium [&>svg]:size-4 [&>svg]:mr-2"
                >
                  GitHub <GithubLight />
                </Link>
              )}
            </div>
          </div>
        </div>
      </InView>
      <div
        role="separator"
        aria-orientation="horizontal"
        className="bg-border -mx-1 h-px"
      />
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="gap-6 flex flex-wrap justify-between mb-12 items-end">
          <div className="flex gap-4 flex-wrap">
            <div>
              <h2 className="font-bold text-lg leading-tight">Industry</h2>
              <p className="text-sm text-muted-foreground">
                {`${project.industry}`}
              </p>
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">Role</h2>
              <p className="text-sm text-muted-foreground">{project.role}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap row-gap-2 column-gap-4">
          {project.tech.map((tech, idx) => {
            const Icon = TECH_ICON_MAP[tech.toLowerCase()] ?? Code;
            return (
              <Badge
                key={idx}
                variant="default"
                className="mr-2 mb-2 px-3 py-2 text-sm font-normal bg-gray-800 text-white"
              >
                <Icon className="mr-2" />
                {tech}
              </Badge>
            );
          })}
        </div>
      </InView>
      <div className="rounded-xl max-w-full p-3 md:p-8 aspect-square bg-linear-180 from-[#7a19c4] via-[#460e70] to-[#430e6b]">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ProductCarousel images={project.images} />
        </InView>
      </div>
    </div>
  );
}

export default page;
