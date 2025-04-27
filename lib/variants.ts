import { UseInViewOptions } from "framer-motion";

export const flickerEffects = [
  {
    opacity: [0, 1, 0.3, 0.7, 1],
    times: [0, 0.2, 0.4, 0.7, 1],
    duration: 1.8,
  },
  {
    opacity: [0, 0.5, 1, 0.6, 1],
    times: [0, 0.1, 0.5, 0.8, 1],
    duration: 2.0,
  },
  { opacity: [0, 1, 0.4, 1], times: [0, 0.3, 0.6, 1], duration: 1.6 },
  {
    opacity: [0, 0.7, 1, 0.5, 1],
    times: [0, 0.25, 0.5, 0.75, 1],
    duration: 1.9,
  },
];

export const viewEffects: UseInViewOptions = {
  once: false,
  margin: "-30% 0px -30% 0px",
};

export const scaleAnimation = {
  initial: { scale: 0, x: "0", y: "0" },
  enter: {
    scale: 1,
    x: "0",
    y: "0",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "0",
    y: "0",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
export const offerSpringConfig = { damping: 15, stiffness: 150, mass: 0.1 };
