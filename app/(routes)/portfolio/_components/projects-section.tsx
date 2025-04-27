"use client";

import { Fragment } from "react";

import ProjectCard from "./project-card";

const projectsData = [
  {
    title: "KadCity",
    description:
      "Brand Identity & Product Design, Product Development, Mobile App Design",
    yearStart: 2021,
    yearEnd: 2021,
    path: "kadcity",
    image: "/images/projects/kadcity-banner.png",
  },
  {
    title: "Xanda farms",
    description: "Brand Identity, Merch & Apparel",
    yearStart: 2021,
    yearEnd: 2021,
    path: "xanda",
    image: "/images/projects/xanda-banner.jpeg",
  },
  {
    title: "Grid 78",
    description:
      "Brand Identity & Product Design, Product Development, Mobile App Design",
    yearStart: 2021,
    yearEnd: 2021,
    path: "grid-78",
    image: "/images/projects/grid-78-banner.png",
  },
  {
    title: "DCSEL",
    description: "Identity Rebranding, Animation, & Merch",
    yearStart: 2021,
    yearEnd: 2021,
    path: "dcsel",
    image: "/images/projects/dcsel-banner.png",
  },
  {
    title: "SCL",
    description:
      "Brand Identity & Product Design, Product Development, Mobile App Design",
    yearStart: 2021,
    yearEnd: 2021,
    path: "scl",
    image: "/images/projects/scl-banner.png",
  },
  {
    title: "Aniket",
    description:
      "Brand Identity & Product Design, Product Development, Mobile App Design",
    yearStart: 2021,
    yearEnd: 2021,
    path: "aniket",
    image: "/images/projects/scl-banner.png",
  },
];

const ProjectsSection = () => {
  // Calculate how many complete rows we need (each row has 2 projects)
  const rowCount = Math.ceil(projectsData.length / 2);

  // Create an array of row indices
  const rows = Array.from({ length: rowCount }, (_, i) => i);

  return rows.map((rowIndex) => {
    // Get the starting index for projects in this row
    const startIdx = rowIndex * 2;

    // Get up to 2 projects for this row
    const rowProjects = projectsData.slice(startIdx, startIdx + 2);

    // Determine if this is an even or odd row (for alternating pattern)
    const isEvenRow = rowIndex % 2 === 0;

    return (
      <div
        key={rowIndex}
        className="group grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {isEvenRow ? (
          <Fragment>
            {rowProjects[0] && <ProjectCard data={rowProjects[0]} />}
            {rowProjects[1] && (
              <ProjectCard className="mt-[72px]" data={rowProjects[1]} />
            )}
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 121 121"
                className="!size-[121px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M106.497 0.360755L20.4072 86.451V7.25505L0.431458 7.43182V120.569H113.569L113.745 100.593H34.5494L120.64 14.5029L106.497 0.360755Z"
                  className="fill-black-900"
                />
              </svg>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 121 121"
                className="!size-[121px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5025 0.360755L100.593 86.451V7.25505L120.569 7.43182V120.569H7.43146L7.25468 100.593H86.4506L0.360391 14.5029L14.5025 0.360755Z"
                  className="fill-black-900"
                />
              </svg>
            </div>
            {rowProjects[0] && <ProjectCard reverse data={rowProjects[0]} />}
            {rowProjects[1] && (
              <ProjectCard
                reverse
                className="mt-[72px]"
                data={rowProjects[1]}
              />
            )}
          </Fragment>
        )}
      </div>
    );
  });
};

export default ProjectsSection;
