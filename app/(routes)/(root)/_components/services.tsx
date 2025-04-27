"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    imgSrc: "/images/service-1.jpeg",
    heading: "Lenon Enterprise",
    subheading: "Brand design, mobile app, Website",
    headingColor: "text-[#FFFFFF]",
    subheadingColor: "text-[#EAEAEA]",
  },
  {
    imgSrc: "/images/service-2.jpeg",
    heading: "Lenon Enterprise",
    subheading: "Brand design, mobile app, Website",
    headingColor: "text-[#FFD193]",
    subheadingColor: "text-[#FFBB60]",
  },
  {
    imgSrc: "/images/service-1.jpeg",
    heading: "Lenon Enterprise",
    subheading: "Brand design, mobile app, Website",
    headingColor: "text-[#FFFFFF]",
    subheadingColor: "text-[#EAEAEA]",
  },
  {
    imgSrc: "/images/service-2.jpeg",
    heading: "Lenon Enterprise",
    subheading: "Brand design, mobile app, Website",
    headingColor: "text-[#FFD193]",
    subheadingColor: "text-[#FFBB60]",
  },
];

const Services = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div ref={targetRef} className="relative -my-48 h-[300dvh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {services.map((service, _index) => {
            return (
              <div key={_index} className="relative h-[558px] w-[1360px] p-16">
                <Image
                  src={service.imgSrc}
                  alt={service.heading}
                  className="h-full w-full object-cover"
                  fill
                />
                <div className="relative flex size-full flex-col justify-end">
                  <h3
                    className={cn(
                      "text-[40px] leading-[52px] font-medium",
                      service.headingColor,
                    )}
                  >
                    {service.heading}
                  </h3>
                  <p
                    className={cn(
                      "text-lg font-normal",
                      service.subheadingColor,
                    )}
                  >
                    {service.subheading}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
