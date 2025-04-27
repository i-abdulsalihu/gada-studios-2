"use client";

import { motion, useInView } from "framer-motion";

import Wrapper from "@/components/shared/wrapper";
import { useRef } from "react";
import { flickerEffects, viewEffects } from "@/lib/variants";

const Approach = () => {
  const ref = useRef(null);

  const isInView1 = useInView(ref, viewEffects);

  return (
    <div className="flex flex-col py-[100px]">
      <Wrapper className="flex flex-col gap-[100px]">
        <div className="ml-auto flex max-w-[629px] flex-col gap-10 py-[90px]">
          <p className="relative flex-1 text-lg font-normal md:text-xl lg:text-2xl lg:leading-[36.67px]">
            Our approach is hands-on and personal. We don’t just design; we
            create meaningful brands that tell compelling stories and drive real
            results. From strategy to execution, we ensure every detail aligns
            with your vision and market needs.
          </p>

          <span className="h-0 w-full border border-white" />
        </div>
        <div className="ml-60 flex max-w-[520px] flex-col gap-10 py-[90px]">
          <p className="relative flex-1 text-lg font-normal md:text-xl lg:text-2xl lg:leading-[36.67px]">
            We work side by side with our clients, diving deep into their world
            to understand what makes them unique. Every step of the way, we add
            value—transforming ideas into powerful, commercially successful
            brands.
          </p>

          <span className="h-0 w-full border border-white" />
        </div>

        <motion.h1
          ref={ref}
          className="font-grotesk mx-auto w-full max-w-[1280px] text-center text-5xl leading-[55px] font-bold transition-all duration-500 md:text-6xl md:leading-[99px] lg:text-[122px] lg:leading-[155px]"
        >
          <motion.span
            animate={
              isInView1
                ? { opacity: flickerEffects[0].opacity }
                : { opacity: 0 }
            }
            transition={
              isInView1
                ? {
                    duration: flickerEffects[0].duration,
                    ease: "easeInOut",
                    times: flickerEffects[0].times,
                  }
                : { duration: 0.5 }
            }
            className="text-center"
          >
            Ready to take your Brand to the next level?
          </motion.span>
        </motion.h1>
      </Wrapper>
    </div>
  );
};

export default Approach;
