"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

import Wrapper from "@/components/shared/wrapper";

const ExpertiseBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const animation = {
    variants: {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
    initial: "hidden",
    animate: mainControls,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  };

  return (
    <div
      ref={ref}
      className="relative mt-[100px] w-full py-[100px] md:h-[calc(100dvh-100px)]"
    >
      <Image
        src="/images/expertise-banner.png"
        alt="banner"
        quality={100}
        priority
        fill
        className="absolute top-[100px] left-0 -z-[1] size-full object-cover brightness-50"
      />

      <Wrapper className="h-full">
        <div className="flex h-full flex-col justify-end gap-6">
          <div className="z-[1] flex flex-col gap-2">
            <h2 className="flex items-center gap-4">
              Creating
              <motion.span {...animation} className="text-primary-500">
                stories
              </motion.span>
              that
              <motion.span {...animation} className="text-primary-500">
                connect
              </motion.span>
            </h2>
            <h2 className="flex items-center gap-4">
              Building
              <motion.span {...animation} className="text-primary-500">
                brands
              </motion.span>
              that
              <motion.span {...animation} className="text-primary-500">
                succeed
              </motion.span>
            </h2>
          </div>
          <p className="relative z-[1] max-w-[737px] text-base font-normal md:text-lg">
            We&apos;re always data-driven, combining creative brilliance with
            strategic insights to deliver results that matter. Imagine exceeding
            your goals, fostering loyalty, and watching your impact grow.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default ExpertiseBanner;
