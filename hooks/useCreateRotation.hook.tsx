import { MotionValue, useTransform } from "framer-motion";

export const useCreateRotation = (
  scrollYProgress: MotionValue<number>,
  multiplier: number,
  initialOffset: number,
) => {
  const transformValue = useTransform(scrollYProgress, (value: number) => {
    const rotation = (value * 360 * multiplier + initialOffset) % 360;
    return rotation - initialOffset;
  });

  return transformValue;
};
