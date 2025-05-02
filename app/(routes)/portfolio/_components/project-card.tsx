// className="flex gap-6 [&:nth-child(2n)]:ml-auto [&:nth-child(2n)]:flex-row-reverse"
"use client";

import { type FC } from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  className?: string;
  reverse?: boolean;
  data: {
    title: string;
    description: string;
    yearStart: number;
    yearEnd: number;
    image: string;
    path: string;
  };
}

const ProjectCard: FC<ProjectCardProps> = ({ className, data, reverse }) => {
  return (
    <Link
      href={`/portfolio/${data.path}`}
      className={cn("flex gap-6", className)}
    >
      <div className="flex w-full flex-col gap-4">
        <h3 className="font-black">{data.title}</h3>
        <div className="bg-black-800 relative h-[460px] w-full overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            quality={100}
            objectFit="cover"
            className={cn(
              "origin-center scale-110 transition-all delay-150 duration-700 ease-in-out group-hover:scale-125",
              {
                "group-hover:origin-top-left": reverse,
                "group-hover:origin-top-right": !reverse,
              },
            )}
          />
        </div>

        <div className="my-6 flex items-start justify-between gap-4">
          <p className="line-clamp-2 max-w-[260px] flex-1 text-lg leading-[1.2] font-normal opacity-0 transition-opacity delay-150 duration-500 group-hover:opacity-100">
            {data.description}
          </p>
          <p className="text-lg font-black">
            {data.yearStart} - {data.yearEnd}
          </p>
        </div>

        <span className="h-0 w-4 border border-white transition-[width] delay-150 duration-500 ease-in-out group-hover:w-full" />
      </div>
    </Link>
  );
};

export default ProjectCard;
