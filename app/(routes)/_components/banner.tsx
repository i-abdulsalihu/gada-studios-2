"use client";

import MaxWrapper from "@/components/shared/max-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const words = [
  "creative design",
  "ui/ux",
  "marketing",
  "motion",
  "animation",
  "branding",
];

interface RandomTextEntry {
  label: string;
  colors: { [key: number]: string; default: string };
}

const randomText: RandomTextEntry[] = [
  {
    label: "Imagine",
    colors: { default: "#B88745" },
  },
  {
    label: "Iwag!ne",
    colors: { default: "#B88745", 2: "#34C759", 4: "#FF9500" },
  },
  {
    label: "Iw@g!ne",
    colors: { default: "#B88745", 2: "#FF2D55", 6: "#007AFF" },
  },
  {
    label: "Im@g!ne",
    colors: { default: "#B88745", 1: "#FFFFFF", 4: "#FF9500" },
  },
  {
    label: "Im@gin~",
    colors: { default: "#B88745", 2: "#34C759", 6: "#AF52DE" },
  },
  {
    label: "Imag!n~",
    colors: { default: "#B88745", 2: "#FFFFFF", 3: "#FFFFFF" },
  },
  {
    label: "Imagine",
    colors: { default: "#B88745" },
  },
  {
    label: "Imag!n~",
    colors: { default: "#B88745", 2: "#FFFFFF", 3: "#FFFFFF", 6: "#FF3B30" },
  },
];

const getStyledText = (
  text: string,
  styles: { [key: number]: string; default: string },
  waveProgress: number,
) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ color: styles.default }}
      animate={{
        color:
          waveProgress >= index
            ? styles[index] || styles.default
            : styles.default,
      }}
      transition={{
        duration: 0, // Faster character animation
      }}
    >
      {char}
    </motion.span>
  ));
};

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [waveProgress, setWaveProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateText = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    let textTimeout: NodeJS.Timeout;

    const cycleText = (index: number) => {
      const textLength = randomText[index].label.length;

      setWaveProgress(0); // Reset wave progress for the new text

      for (let i = 0; i <= textLength; i++) {
        setTimeout(() => {
          setWaveProgress(i);
        }, i * 10); // Faster wave speed
      }

      textTimeout = setTimeout(
        () => {
          const nextIndex = (index + 1) % randomText.length;
          setCurrentIndex(nextIndex);

          if (nextIndex !== 0) {
            cycleText(nextIndex); // Continue cycle
          } else {
            setIsAnimating(false); // Stop animating after cycling through all texts
          }
        },
        textLength * 10 + 150,
      ); // Duration per text + pause before switching
    };

    cycleText(currentIndex);

    return () => clearTimeout(textTimeout);
  };

  return (
    <div className="h-dvh bg-black-950 pt-28">
      <div className="relative h-full overflow-x-clip pt-20">
        <MaxWrapper className="relative flex flex-col gap-4">
          <div className="w-full max-w-[783px]">
            <h1 className="relative">
              Think{" "}
              <span className="group absolute bottom-0 ml-6 transition-all duration-500 hover:-bottom-4">
                <span className="text-gada-500 transition-all duration-500 group-hover:!text-[250px]">
                  Big
                </span>
                <span>.</span>
              </span>
            </h1>

            <h1>
              Build{" "}
              <span className="text-gada-500 transition-all duration-700 hover:!font-thin hover:text-white">
                Bold
              </span>
              .
            </h1>

            <h1>
              Dare to{" "}
              <motion.span className="text-gada-500" onMouseEnter={animateText}>
                <AnimatePresence>
                  {getStyledText(
                    randomText[currentIndex].label,
                    randomText[currentIndex].colors,
                    waveProgress,
                  )}
                </AnimatePresence>
              </motion.span>
              .
            </h1>
          </div>

          <div className="relative">
            <p className="max-w-[585px] font-grotesk text-base font-normal md:text-lg">
              Carefully blending creativity with strategy, Gada offers
              progressive Transformation in Software Development, Branding,
              Marketing And Communications, Architecture.
            </p>

            <div className="absolute -bottom-[600px] left-1/2 flex h-80 w-[720px] -translate-x-1/2 items-center justify-center md:-bottom-[590px] md:h-[650px] md:w-[2459px]">
              <div className="h-16 w-full -rotate-[13deg] bg-[#212121] md:h-[104px]">
                <Marquee
                  autoFill
                  speed={300}
                  className="flex size-full items-center"
                >
                  {[...new Array(3).fill(5)].map(() =>
                    words.map((word) => (
                      <div key={word} className="flex select-none items-center">
                        <span className="text-lg font-normal uppercase tracking-wide md:text-3xl">
                          {word}
                        </span>
                        <span className="mx-10 size-3 rounded-full bg-gada-500 md:mx-20 md:size-4" />
                      </div>
                    )),
                  )}
                </Marquee>
              </div>
            </div>

            <div className="absolute left-full top-0 ml-28 hidden h-80 w-[2459px] -translate-x-1/2 items-center justify-center md:-bottom-[590px] md:flex">
              <div className="h-16 w-full rotate-[46deg] bg-[#FAFAFA] md:h-[104px]">
                <Marquee
                  autoFill
                  speed={300}
                  className="flex size-full items-center"
                >
                  {[...new Array(3).fill(5)].map(() =>
                    words.map((word) => (
                      <div key={word} className="flex select-none items-center">
                        <span className="text-lg font-normal uppercase tracking-wide text-[#212121] md:text-3xl">
                          {word}
                        </span>
                        <span className="mx-10 size-3 rounded-full bg-gada-500 md:mx-20 md:size-4" />
                      </div>
                    )),
                  )}
                </Marquee>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Button size={"lg"} className="w-max">
              <span>Learn More</span>
              <ArrowRight className="ml-2 !size-6" />
            </Button>
          </div>
          <div className="block md:hidden">
            <Button className="w-max">
              <span>Learn More</span>
              <ArrowRight className="ml-2 !size-6" />
            </Button>
          </div>
        </MaxWrapper>
      </div>
    </div>
  );
};

export default Banner;
