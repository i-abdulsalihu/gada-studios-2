"use client";

import Image from "next/image";
import { memo, useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import MaxWrapper from "@/components/shared/max-wrapper";
import { projects } from "@/lib/static";
import { offerSpringConfig, scaleAnimation } from "@/lib/variants";

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
    <div className="relative flex min-h-screen flex-col pb-28 font-grotesk">
      <MaxWrapper>
        <h3 className="text-[36px] font-normal">What we Offer</h3>
      </MaxWrapper>
      <div className="mt-5 flex flex-col">
        {projects.map(({ heading, subheading }, _index) => (
          <motion.div
            initial="initial"
            whileHover="whileHover"
            key={heading}
            className="group border-b border-black-700/50 bg-[#131313] py-9 transition-colors duration-300 first:border-t hover:bg-black-950"
            onMouseEnter={() => {
              setModal({ active: true, index: _index + 1 });
            }}
            onMouseLeave={() => {
              setModal({ active: false, index: 0 });
            }}
          >
            <MaxWrapper className="flex h-full flex-col gap-2 pr-5 md:flex-row md:items-center md:gap-0 md:pr-0">
              <div className="md:w-[40%]">
                <h4 className="text-2xl font-normal transition-all duration-300 group-hover:text-[32px] group-hover:font-bold">
                  {heading}
                </h4>
              </div>
              <p className="flex-1 text-lg leading-[22.97px]">{subheading}</p>
            </MaxWrapper>
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
        className="pointer-events-none ml-4 mt-4 flex h-[439px] w-[352px] overflow-hidden rounded-lg border border-black-700/50 bg-black-950 shadow-lg"
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
