"use client";

import Image from "next/image";
import { memo, useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { offerSpringConfig, scaleAnimation } from "@/lib/variants";
import Wrapper from "@/components/shared/wrapper";

const projects = [
  {
    heading: "Software Development",
    subheading: "UI/UX, No-code, Front-End, Back-End, Android",
    imgSrc: "/images/software-development.avif",
  },
  {
    heading: "Branding",
    subheading:
      "Identity, Strategy, Messaging, Experience, Assets, Communication, Management.",
    imgSrc: "/images/branding.avif",
  },
  {
    heading: "Marketing",
    subheading:
      "Strategy, Digital marketing, Market analysis, Promotion Design.",
    imgSrc: "/images/marketing.avif",
  },
  {
    heading: "Design",
    subheading:
      "Graphic design, proposals, Flyers, Animation, Illustration, Packaging, Company Profiles.",
    imgSrc: "/images/design.avif",
  },
  {
    heading: "Communication",
    subheading:
      "Public Relations, Digital Comms, Event & Corporate comms, Audits, Surveys, Analytics.",
    imgSrc: "/images/communication.avif",
  },
  {
    heading: "3D Visualization",
    subheading:
      "Concept Development, 3D Modelling, Texture and Materials, Animation.",
    imgSrc: "/images/3d-visualization.avif",
  },
  {
    heading: "Consultancy",
    subheading:
      "Structural Development, Knowledge Sharing, Domain Expertise, Risk management, SWOT.",
    imgSrc: "/images/consultancy.avif",
  },
];

const Offer = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, offerSpringConfig);
  const y = useSpring(mouseY, offerSpringConfig);

  const imageY = useSpring(0, {
    damping: 15,
    stiffness: 150,
  });

  useEffect(() => {
    if (active) {
      imageY.set(-(index - 1) * 439);
    }
  }, [index, active, imageY]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex min-h-screen flex-col pb-28">
      <Wrapper>
        <h3 className="text-2xl font-normal md:text-4xl">What we Offer</h3>
      </Wrapper>

      <div className="mt-5 flex flex-col">
        {projects.map(({ heading, subheading }, _index) => (
          <motion.div
            initial="initial"
            whileHover="whileHover"
            key={heading}
            className="group border-black-700/50 hover:bg-black-950 border-b bg-[#131313] py-9 transition-colors duration-300 first:border-t"
            onMouseEnter={() => {
              setModal({ active: true, index: _index + 1 });
            }}
            onMouseLeave={() => {
              setModal({ active: false, index: 0 });
            }}
          >
            <Wrapper className="flex flex-col gap-2 pr-5 md:h-10 md:flex-row md:items-center md:gap-0 md:pr-0">
              <div className="md:w-[40%]">
                <h4 className="text-2xl font-normal transition-all duration-300 group-hover:font-bold lg:group-hover:text-[32px]">
                  {heading}
                </h4>
              </div>
              <p className="flex-1 text-lg leading-[22.97px]">{subheading}</p>
            </Wrapper>
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          left: 0,
          top: 0,
          x,
          y,
          position: "fixed",
          zIndex: 50,
          transformOrigin: "top left",
        }}
        className="border-black-700/50 bg-black-950 pointer-events-none mt-4 ml-4 hidden h-[439px] w-[352px] overflow-hidden rounded-lg border shadow-lg lg:flex"
      >
        <motion.div className="relative flex flex-col" style={{ y: imageY }}>
          {projects.map((project, _index) => (
            <div
              key={`modal_${_index}`}
              className="relative h-[439px] w-[352px] shrink-0"
            >
              <Image
                src={project.imgSrc}
                alt={`Image for ${project.heading}`}
                fill
                className="object-cover"
                sizes="352px"
                priority
                quality={100}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default memo(Offer);
