"use client";

import { assets } from "@/public";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoVariant = ({
  variant = "white",
}: {
  variant?: "white" | "secondary" | "primary";
}) => {
  const logoSrc =
    variant === "white"
      ? assets.svg.logoWhite
      : variant === "primary"
        ? assets.svg.logoPrimary
        : assets.svg.logoSecondary;

  return (
    <motion.div
      key={variant} // ensures Framer detects variant changes
      initial={{ opacity: 1 }} // animation starts from here
      exit={{ opacity: 0 }} // optional exit animation
      transition={{ duration: 0.9 }} // smooth timing
      className="h-[18.3px] w-[83px] object-contain"
    >
      <Image
        src={logoSrc}
        alt="GADA Studios"
        width={83}
        height={18.3}
        priority
        quality={100}
        className="h-full w-full"
      />
    </motion.div>
  );
};

export default LogoVariant;
