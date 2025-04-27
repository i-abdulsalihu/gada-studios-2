"use client";

import { FC, memo, useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

interface ParagraphProps {
  value: string;
  className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ value, className }) => {
  const refElement = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refElement,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <span className={cn("flex flex-wrap", className)} ref={refElement}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        const range = [start, end];
        const progress = scrollYProgress;

        return (
          <Word key={index} word={word} range={range} progress={progress} />
        );
      })}
    </span>
  );
};

export default memo(Paragraph);

interface WordProps {
  word: string;
  range: number[];
  progress: MotionValue<number>;
}

const Word: FC<WordProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-4 last-of-type:mr-0">
      <span className="absolute opacity-10">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
};
