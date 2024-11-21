"use client";

import MaxWrapper from "@/components/shared/max-wrapper";
import { Fragment, memo, useRef } from "react";
import Offer from "./offer";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { assets } from "@/public";
import { possibilities } from "@/lib/static";

const Possibilities = () => {
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

  const createRotation = (multiplier: number, initialOffset: number) => {
    return useTransform(scrollYProgress, (value) => {
      const rotation = (value * 360 * multiplier + initialOffset) % 360;
      return rotation - initialOffset;
    });
  };

  const rotateOuter = createRotation(1, -12);
  const rotateMiddle = createRotation(-1, 12);
  const rotateInner = createRotation(2, 45);

  return (
    <Fragment>
      <div className="relative flex flex-col">
        <div className="absolute left-1/2 top-0 -z-10 h-full w-px -translate-x-1/2 bg-white" />

        <MaxWrapper className="relative">
          <div className="-z-10 h-px w-full bg-white" />

          <div className="flex h-[200vh] w-full py-14">
            <div className="w-1/2">
              <h3 className="text-4xl font-normal">
                Imagine the Possibilities
              </h3>
            </div>
            <div className="w-1/2"></div>
          </div>

          <div className="h-[200vh] w-full py-14">
            {possibilities.map((possibility, index) => (
              <div key={index} className="my-16 h-[500px]">
                <div
                  className={`group ${possibility.alignment === "start" ? "mr-auto" : "ml-auto"} flex h-max w-max justify-${
                    possibility.alignment
                  }`}
                >
                  <div className="flex w-full flex-col gap-4">
                    <div className="w-full max-w-[305px] gap-2">
                      <h4 className="text-2xl font-bold">
                        {possibility.title}
                      </h4>
                      <p className="text-lg font-normal">
                        {possibility.description}
                      </p>
                    </div>

                    <div className="relative h-[41px] w-full max-w-[325px] rounded-3xl bg-white transition-[height] duration-300 group-hover:h-[243px]">
                      <Image
                        src={possibility.img}
                        alt={possibility.title}
                        fill
                        quality={100}
                        priority
                        className="rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[calc(100vh-20vh)] w-full py-14"></div>
        </MaxWrapper>

        <Offer />

        <div className="h-screen" />
      </div>

      <div ref={targetRef} className="relative -mt-96 h-[300dvh]">
        <motion.div
          ref={ref}
          viewport={{
            once: true,
            amount: "some",
          }}
          style={{
            scale: scaleProgress,
          }}
          className="sticky top-0 mx-auto flex aspect-[1.8] h-screen w-[calc(100%-20%)] items-center justify-center lg:w-[850px]"
        >
          <Image
            src={assets.svg.animateFull}
            alt="GADA Studios"
            width={847}
            height={523}
            priority
            quality={100}
            className="size-full"
          />

          <div className="absolute left-1/2 top-1/2 z-[1] mx-auto size-[489px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#212121]">
            <motion.div
              style={{
                rotate: rotateOuter,
                translate: "-50% -50%",
              }}
              className="absolute left-1/2 top-1/2 z-[1] size-[489px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0px_0px_70px_1px] shadow-black-950/30"
            >
              <Image
                src={assets.svg.animateOuter}
                alt="GADA Studios animate outer"
                fill
                priority
                quality={100}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              style={{
                rotate: rotateMiddle,
                translate: "-50% -50%",
              }}
              className="absolute left-1/2 top-1/2 z-[2] size-[349px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0px_0px_70px_1px] shadow-black-950/30"
            >
              <Image
                src={assets.svg.animateMiddle}
                alt="GADA Studios animate middle"
                fill
                priority
                quality={100}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              style={{
                rotate: rotateInner,
                translate: "-50% -50%",
              }}
              className="absolute left-1/2 top-1/2 z-[3] size-[167px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0px_0px_70px_1px] shadow-black-950/30"
            >
              <Image
                src={assets.svg.animateInner}
                alt="GADA Studios animate inner"
                fill
                priority
                quality={100}
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default memo(Possibilities);
