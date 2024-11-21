"use client";

import { memo, useState } from "react";
import Link from "next/link";
import MaxWrapper from "./max-wrapper";
import LogoVariant from "./logo-variant";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import DropMenu from "./drop-menu";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()!;

    if (latest > previous && latest >= 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed left-0 top-0 z-[9000] w-full bg-black-950 py-7 sm:bg-transparent sm:mix-blend-difference md:py-10"
    >
      <MaxWrapper className="flex h-5 items-center justify-between gap-6">
        <div>
          <Link href="/">
            <LogoVariant />
          </Link>
        </div>

        <DropMenu>
          <div
            role="button"
            className="flex h-5 items-center justify-end gap-4"
          >
            <div className="mr-4 h-[52px] w-[2px] rounded-full bg-[radial-gradient(white_10%,_black_50%,_transparent_40%)]" />

            <p className="text-sm font-medium uppercase">MENU</p>

            <svg
              width="28"
              height="12"
              viewBox="0 0 28 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.5H28" stroke="white" strokeWidth="3" />
              <path d="M0 10.5H18.5" stroke="white" strokeWidth="3" />
            </svg>
          </div>
        </DropMenu>
      </MaxWrapper>
    </motion.header>
  );
};

export default memo(Header);
