"use client";

import { memo, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { brands as BrandType } from "@/lib/static";

const Brand = ({ brands }: { brands: typeof BrandType }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div ref={targetRef} className="relative -mb-48 h-[300dvh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {brands.map((brand, _index) => {
            return (
              <div key={_index} className="relative h-[558px] w-[1360px] p-16">
                <Image
                  src={brand.imgSrc}
                  alt={brand.heading}
                  className="h-full w-full object-cover"
                  fill
                />
                <div className="relative flex size-full flex-col justify-end">
                  <h3
                    className={cn(
                      "text-[40px] font-medium leading-[52px]",
                      brand.headingColor,
                    )}
                  >
                    {brand.heading}
                  </h3>
                  <p
                    className={cn("text-lg font-normal", brand.subheadingColor)}
                  >
                    {brand.subheading}
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

export default memo(Brand);
