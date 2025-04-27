"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Wrapper from "./wrapper";
import MegaMenu from "./mega-menu";

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
    <Sheet>
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
        className="bg-black-950 fixed top-0 left-0 z-50 h-[100px] w-full py-7 sm:bg-transparent sm:mix-blend-difference md:py-10"
      >
        <Wrapper className="relative flex h-5 items-center justify-between gap-6">
          <div>
            <Link href="/">
              <Image
                src="/svgs/logo-white.svg"
                alt="GADA Studios"
                width={83}
                height={18.3}
                quality={100}
                priority
                className="h-full w-full"
              />
            </Link>
          </div>

          <SheetTrigger>
            <div
              role="button"
              className="flex h-5 cursor-pointer items-center justify-end gap-3 sm:gap-4"
            >
              <div className="mr-4 h-11 w-[2px] rounded-full bg-[radial-gradient(white_10%,_black_50%,_transparent_40%)] sm:h-[52px]" />

              <p className="text-sm font-medium uppercase">MENU</p>

              <svg
                className="h-3 w-5 sm:w-7"
                viewBox="0 0 28 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5H28" stroke="white" strokeWidth="3" />
                <path d="M0 10.5H18.5" stroke="white" strokeWidth="3" />
              </svg>
            </div>
          </SheetTrigger>
        </Wrapper>
      </motion.header>

      <SheetContent side="top" className="bg-black-950 h-dvh !p-0">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
        </VisuallyHidden>

        <MegaMenu />
      </SheetContent>
    </Sheet>
  );
};

export default Header;
