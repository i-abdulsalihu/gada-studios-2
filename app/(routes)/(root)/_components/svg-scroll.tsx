"use client";

import Image from "next/image";
import { memo, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const SVGScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scaleScroll } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scaleScroll, [0.8, 1], [0.9, 1]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const rotateOuter = useTransform(scrollYProgress, [0, 1], [32, 360]); // Start at 32, go to 360
  const rotateMiddle = useTransform(scrollYProgress, [0, 1], [-22, 360]); // Start at -22, go to 360
  const rotateInner = useTransform(scrollYProgress, [0, 1], [45, 720]); // Start at 45, go to 720

  return (
    <div
      ref={targetRef}
      className="relative -mt-96 h-[100vh] md:h-[200vh] lg:h-[300dvh]"
    >
      <motion.div
        ref={ref}
        viewport={{
          once: true,
          amount: "some",
        }}
        style={{
          scale: scaleProgress,
        }}
        className="pointer-events-none sticky top-0 mx-auto flex h-screen w-full max-w-[850px] items-center justify-center"
      >
        <div className="relative h-[489px] w-[850px] scale-50 sm:scale-75 md:scale-100">
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1]), // Opacity transition from 0 to 1, starting after 20% of the scroll
            }}
            className="h-[489px] w-[850px]"
          >
            <Image
              src="/svgs/animate-full.svg"
              alt="GADA Studios"
              width={847}
              height={489}
              priority
              quality={100}
              className="h-[489px] w-[850px]"
            />
          </motion.div>

          <div className="absolute top-1/2 left-1/2 z-[1] mx-auto size-[489px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#212121]">
            <motion.div
              initial={{ rotate: 32 }}
              style={{
                rotate: rotateOuter,
                translate: "-50% -50%",
              }}
              className="shadow-black-950/30 absolute top-1/2 left-1/2 z-[1] size-[489px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0px_0px_70px_1px]"
            >
              <Image
                src="/svgs/animate-outside.svg"
                alt="GADA Studios animate outer"
                fill
                priority
                quality={100}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ rotate: -22 }}
              style={{
                rotate: rotateMiddle,
                translate: "-50% -50%",
              }}
              className="shadow-black-950/30 absolute top-1/2 left-1/2 z-[2] size-[349px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0px_0px_70px_1px]"
            >
              <Image
                src="/svgs/animate-middle.svg"
                alt="GADA Studios animate middle"
                fill
                priority
                quality={100}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ rotate: 45 }}
              style={{
                rotate: rotateInner,
                translate: "-50% -50%",
              }}
              className="shadow-black-950/30 absolute top-1/2 left-1/2 z-[3] size-[167px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0px_0px_70px_1px]"
            >
              <Image
                src="/svgs/animate-center.svg"
                alt="GADA Studios animate inner"
                fill
                priority
                quality={100}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(SVGScroll);
