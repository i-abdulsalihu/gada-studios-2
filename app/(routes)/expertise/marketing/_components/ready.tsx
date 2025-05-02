"use client";

import { motion, useInView } from "framer-motion";

import Wrapper from "@/components/shared/wrapper";
import { Fragment, useRef } from "react";
import { flickerEffects, viewEffects } from "@/lib/variants";
import Services from "../../_components/services";

const Ready = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, viewEffects);

  return (
    <Fragment>
      <div className="relative flex h-full flex-col gap-1 py-[100px] md:py-[200px]">
        <Services />
      </div>

      <Wrapper>
        <motion.h1
          ref={ref}
          className="font-grotesk mx-auto w-full max-w-[1280px] text-center text-5xl leading-[55px] font-bold transition-all duration-500 md:text-6xl md:leading-[99px] lg:text-[122px] lg:leading-[155px]"
        >
          <motion.span
            animate={
              isInView ? { opacity: flickerEffects[0].opacity } : { opacity: 0 }
            }
            transition={
              isInView
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
    </Fragment>
  );
};

export default Ready;
