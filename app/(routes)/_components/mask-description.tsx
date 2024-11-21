"use client";

import MaxWrapper from "@/components/shared/max-wrapper";
import useMouse from "@/hooks/useMouse.hook";
import { motion } from "framer-motion";
import { memo, useState } from "react";

const MaskDescription = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMouse();
  const size = isHovered ? 300 : 40;

  return (
    <div className="-mb-72 h-screen w-full">
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.4,
        }}
        className="mask-text flex size-full items-center justify-center"
      >
        <MaxWrapper className="flex flex-1 select-none flex-col">
          <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="max-w-[975px] pb-8 text-xl font-semibold md:text-5xl"
          >
            Recognising your requirements and going above and beyond
          </h3>
          <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="max-w-[975px] pb-8 text-xl font-semibold md:text-5xl"
          >
            Weary of the same old thing? So are we. We are aware that your brand
            has a special tale to tell, and we will work with you to find and
            share it. We think it&apos;s important to push boundaries and
            establish genuine connections with your audience.
          </h3>
        </MaxWrapper>
      </motion.div>

      <div className="flex size-full items-center">
        <MaxWrapper className="flex flex-1 flex-col">
          <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="max-w-[975px] pb-8 text-xl font-medium md:text-5xl"
          >
            Understanding your needs, exceeding your expectations
          </h3>
          <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="max-w-[975px] pb-8 text-xl font-medium md:text-5xl"
          >
            Tired of the status quo? We are too. We understand your brand has a
            unique story to tell, partnering with you to uncover that story and
            amplify it. We believe in pushing boundaries and connecting you with
            your audience in meaningful ways.
          </h3>
        </MaxWrapper>
      </div>
    </div>
  );
};

export default memo(MaskDescription);
