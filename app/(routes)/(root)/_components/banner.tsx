"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Marquee from "react-fast-marquee";

import Wrapper from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";

const words = [
  "creative design",
  "ui/ux",
  "marketing",
  "motion",
  "animation",
  "branding",
];

interface RandomTextEntryProps {
  label: string;
  colors: { [key: number]: string; default: string };
}

const randomText: RandomTextEntryProps[] = [
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

const HomeBanner = () => {
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
    <div className="bg-black-950 py-28 md:h-dvh">
      <div className="relative h-full overflow-x-clip pt-10 md:pt-20">
        <Wrapper className="relative space-y-2 md:space-y-8">
          <div className="w-full max-w-[783px]">
            <h1 className="relative">
              Think{" "}
              <span className="group absolute bottom-0 ml-2 transition-all duration-500 md:ml-6">
                <span className="text-primary-500 transition-all duration-500 group-hover:!text-[80px] md:group-hover:!text-[220px]">
                  Big
                </span>
                <span>.</span>
              </span>
            </h1>
            <h1>
              Build{" "}
              <span className="text-primary-500 transition-all duration-[600ms] hover:!font-thin hover:text-white">
                Bold
              </span>
              .
            </h1>
            <h1>
              Dare to{" "}
              <motion.span
                className="text-primary-500"
                onMouseEnter={animateText}
              >
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

          <div className="relative flex flex-col gap-6">
            <p className="relative z-[1] max-w-[585px] text-base font-normal md:text-lg">
              Carefully blending creativity with strategy, Gada offers
              progressive Transformation in Software Development, Branding,
              Marketing And Communications, Architecture.
            </p>

            <div className="z-[1] hidden md:block">
              <Button size={"lg"} className="w-max">
                <span>Learn More</span>
                <FiArrowRight className="ml-2 !size-6" />
              </Button>
            </div>
            <div className="z-[1] block md:hidden">
              <Button>
                <span>Learn More</span>
                <FiArrowRight className="ml-2 !size-6" />
              </Button>
            </div>

            <div className="absolute -bottom-40 left-1/2 hidden -translate-x-1/2 -rotate-[13deg] select-none sm:block md:w-[2459px]">
              <div className="h-16 w-full bg-[#212121] md:h-[104px]">
                <Marquee
                  autoFill
                  speed={200}
                  className="flex size-full items-center"
                >
                  {[...new Array(3).fill(5)].map(() =>
                    words.map((word) => (
                      <div key={word} className="flex items-center select-none">
                        <span className="text-lg font-medium tracking-wide uppercase md:text-3xl">
                          {word}
                        </span>
                        <span className="bg-primary-500 mx-10 size-3 rounded-full md:mx-16 md:size-4" />
                      </div>
                    )),
                  )}
                </Marquee>
              </div>
            </div>
            <div className="absolute ml-28 hidden rotate-[46deg] select-none sm:block md:w-[2459px]">
              <div className="h-16 w-full bg-[#FAFAFA] md:h-[104px]">
                <Marquee
                  autoFill
                  speed={200}
                  className="flex size-full items-center"
                >
                  {[...new Array(3).fill(5)].map(() =>
                    words.map((word) => (
                      <div key={word} className="flex items-center select-none">
                        <span className="text-lg font-medium tracking-wide text-[#212121] uppercase md:text-3xl">
                          {word}
                        </span>
                        <span className="bg-primary-500 mx-10 size-3 rounded-full md:mx-16 md:size-4" />
                      </div>
                    )),
                  )}
                </Marquee>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default HomeBanner;
