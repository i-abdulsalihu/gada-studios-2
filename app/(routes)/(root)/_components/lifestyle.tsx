"use client";

import React, { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Wrapper from "@/components/shared/wrapper";
import { flickerEffects, viewEffects } from "@/lib/variants";

const Lifestyle = () => {
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView2 = useInView(ref2, viewEffects);
  const isInView3 = useInView(ref3, viewEffects);
  const isInView4 = useInView(ref4, viewEffects);

  return (
    <div className="flex flex-col">
      <Wrapper>
        <div className="flex h-screen flex-col items-center justify-center">
          <motion.h1
            ref={ref2}
            className="font-grotesk flex w-full max-w-[1280px] flex-col text-5xl leading-[55px] font-bold transition-all duration-500 md:text-6xl md:leading-[99px] lg:text-[122px] lg:leading-[155px]"
          >
            <motion.span
              animate={
                isInView2
                  ? { opacity: flickerEffects[1].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView2
                  ? {
                      duration: flickerEffects[1].duration,
                      ease: "easeInOut",
                      times: flickerEffects[1].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-center lg:text-left"
            >
              It&apos;s more than
            </motion.span>
            <motion.span
              animate={
                isInView2
                  ? { opacity: flickerEffects[2].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView2
                  ? {
                      duration: flickerEffects[2].duration,
                      ease: "easeInOut",
                      times: flickerEffects[2].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-center lg:text-right"
            >
              Just Business
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <motion.h1
            ref={ref3}
            className="font-grotesk w-full max-w-[1280px] text-center text-5xl leading-[55px] font-bold transition-all duration-500 md:text-6xl md:leading-[99px] lg:text-[122px] lg:leading-[155px]"
          >
            <motion.span
              animate={
                isInView3
                  ? { opacity: flickerEffects[3].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView3
                  ? {
                      duration: flickerEffects[3].duration,
                      ease: "easeInOut",
                      times: flickerEffects[3].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-center"
            >
              It&apos;s a lifestyle
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <motion.h1
            ref={ref4}
            className="font-grotesk w-full max-w-[1280px] text-center text-5xl leading-[55px] font-bold transition-all duration-500 md:text-6xl md:leading-[99px] lg:text-[122px] lg:leading-[155px]"
          >
            <motion.span
              animate={
                isInView4
                  ? { opacity: flickerEffects[0].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView4
                  ? {
                      duration: flickerEffects[0].duration,
                      ease: "easeInOut",
                      times: flickerEffects[0].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-center"
            >
              Let&apos;s get Started!
            </motion.span>
          </motion.h1>
        </div>
      </Wrapper>
    </div>
  );
};

export default memo(Lifestyle);
