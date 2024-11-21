"use client";

import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MaxWrapper from "./max-wrapper";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { ReactNode } from "react";
import { navMenuLinks } from "@/lib/static";

const DropMenu = ({ children }: { children: ReactNode }) => {
  return (
    <Drawer direction="top">
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-dvh">
        <MaxWrapper className="flex h-full py-32">
          <VisuallyHidden>
            <DrawerHeader>
              <DrawerTitle />
              <DrawerDescription />
            </DrawerHeader>
          </VisuallyHidden>
          <div className="flex w-full max-w-[859px] flex-col justify-between">
            {navMenuLinks.map((link, _index) => (
              <DrawerClose
                key={_index}
                className="group flex h-[153px] w-max flex-col justify-center"
              >
                <span className="origin-left text-[64px] font-black uppercase leading-[76.8px] text-[#3F3F3F] transition-all duration-300 group-hover:text-8xl group-hover:leading-[100px] group-hover:text-white">
                  {link.label}
                </span>
                {link.sublabel && (
                  <span className="origin-left text-xl font-medium leading-[21.6px] text-[#3F3F3F] transition-all duration-300 group-hover:text-[32px] group-hover:leading-[38.4px] group-hover:text-white">
                    {link.sublabel}
                  </span>
                )}
              </DrawerClose>
            ))}
          </div>

          <div className="top-auto mb-[100px] ml-auto mt-auto flex w-full max-w-[274px] flex-col gap-2">
            <p className="cursor-pointer text-lg font-normal underline">
              gadastudious240@gmail.com
            </p>
            <p className="cursor-pointer text-lg font-normal underline">
              +234 706 464 2407
            </p>

            <div className="mt-2 flex items-center gap-5">
              <Link href="/">
                <FaLinkedin className="size-5" />
              </Link>
              <Link href="/">
                <FaTwitter className="size-5" />
              </Link>
              <Link href="/">
                <FaInstagram className="size-5" />
              </Link>
              <Link href="/">
                <FaFacebook className="size-5" />
              </Link>
            </div>
          </div>
        </MaxWrapper>
      </DrawerContent>
    </Drawer>
  );
};

export default DropMenu;
