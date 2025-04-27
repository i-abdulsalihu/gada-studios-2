"use client";

import Wrapper from "@/components/shared/wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const teams = [
  {
    name: "Umar Salihu",
    role: "Creative Director",
    imgUrl: "/images/teams/umar.png",
  },
  {
    name: "Yohanna Daniel",
    role: "Chief Technical Officer",
    imgUrl: "/images/teams/daniel.png",
    profile: "/images/teams/daniel-profile.png",
  },
  {
    name: "Wilson Aku",
    role: "Chief Financial Officer",
    imgUrl: "/images/teams/wilson.png",
  },
  {
    name: "Maryam Ibrahim",
    role: "Project Manager",
    imgUrl: "/images/teams/maryam.png",
    profile: "/images/teams/maryam-profile.png",
  },
  {
    name: "Kwalbe Victor",
    role: "Visual Design",
    imgUrl: "/images/teams/kwalbe.png",
    profile: "/images/teams/kwalbe-profile.png",
  },
  {
    name: "Lola Eric",
    role: "UX/Copywriting",
    imgUrl: "/images/teams/lola.png",
  },
  {
    name: "Michael Eferemo",
    role: "Marketing Partner",
    imgUrl: "/images/teams/lola.png",
  },
];

const TeamSection = () => {
  const [showProfile, setShowProfile] = useState<number | null>(null);

  return (
    <Wrapper className="flex h-[801px] items-center">
      <div className="flex">
        {teams.map((team, index) => (
          <div
            key={index}
            className="group hover:border-primary-500 mr-6 w-max rounded-lg border border-transparent bg-[#171718] px-9 py-8 transition-colors duration-300 md:last-of-type:mr-28"
          >
            <div className="flex w-[233px] flex-col items-center gap-6">
              <div
                onClick={() =>
                  showProfile && showProfile === index
                    ? setShowProfile(null)
                    : {}
                }
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-lg bg-[#232324]",
                  {
                    "cursor-pointer": showProfile && showProfile === index,
                  },
                )}
              >
                <Image
                  src={
                    team.profile && showProfile && showProfile === index
                      ? team.profile
                      : team.imgUrl
                  }
                  alt={team.name}
                  fill
                  priority
                  quality={100}
                  className={cn(
                    "size-full origin-top object-cover grayscale transition-all duration-500 group-hover:grayscale-0",
                    {
                      "grayscale-0": showProfile === index,
                    },
                  )}
                />

                {team.profile && showProfile !== index && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowProfile(index);
                    }}
                    role="button"
                    className="pointer-events-none absolute top-[139px] left-4 flex cursor-pointer items-center rounded-[4px] bg-[#171718] px-2 py-[5px] text-[10px] font-normal opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
                  >
                    View profile
                  </button>
                )}
              </div>

              <div className="flex flex-col items-center">
                <p className="text-lg font-black">{team.name}</p>
                <p className="group-hover:text-primary-500 text-sm leading-none font-normal transition-colors duration-300">
                  {team.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default TeamSection;
