"use client";

import Image from "next/image";
import Link from "next/link";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import Wrapper from "./wrapper";
import { SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavMenuProps = {
  title: string;
  subtitle?: string;
  path: string;
  newTab?: boolean;
};

const navMenu: NavMenuProps[] = [
  {
    title: "Our Expertise",
    subtitle: "What we do",
    path: "/expertise",
  },
  {
    title: "Our Initiatives",
    subtitle: "See our personal projects",
    path: "/initiatives",
  },
  {
    title: "Behind the work",
    subtitle: "Meet the crew",
    path: "/work",
  },
  {
    title: "Portfolio",
    subtitle: "Meet the crew",
    path: "/portfolio",
  },
  {
    title: "Reach Out",
    path: "/contact",
  },
];

const MegaMenu = () => {
  const pathname = usePathname();

  return (
    <Wrapper>
      <div className="py-7 md:py-10">
        <div className="relative flex h-5 items-center justify-between gap-6">
          <SheetClose asChild>
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
          </SheetClose>

          <SheetClose>
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
          </SheetClose>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between gap-6 py-4 sm:gap-2 lg:flex-row lg:items-end">
        <div className="flex flex-1 flex-col gap-2">
          {navMenu.map((link) => {
            const isActive = pathname.includes(link.path);

            return (
              <SheetClose key={link.path} asChild>
                <Link
                  href={link.path}
                  target={link.newTab ? "_blank" : "_self"}
                  className={cn(
                    "group text-black-900 hover:text-foreground flex w-max flex-col justify-center gap-1 py-4 transition-all duration-300 sm:h-32 sm:py-0 lg:h-[153px]",
                    {
                      "text-foreground": isActive,
                      "sm:hover:gap-4": !isActive,
                    },
                  )}
                >
                  <p
                    className={cn(
                      "origin-left text-4xl font-black uppercase transition-transform duration-300 ease-in-out sm:text-5xl lg:text-6xl",
                      {
                        "sm:group-hover:scale-110 lg:group-hover:scale-150":
                          !isActive,
                      },
                    )}
                  >
                    {link.title}
                  </p>
                  <span
                    className={cn(
                      "origin-left text-lg font-normal tracking-wide transition-transform duration-300 ease-in-out",
                      {
                        "sm:group-hover:scale-110 lg:group-hover:scale-150":
                          !isActive,
                      },
                    )}
                  >
                    {link.subtitle}
                  </span>
                </Link>
              </SheetClose>
            );
          })}
        </div>

        <div className="mt-auto mb-20 flex flex-col gap-2 sm:ml-auto">
          <Link
            href="mailto:gadastudious240@gmail.com"
            className="text-base underline md:text-lg"
          >
            gadastudious240@gmail.com
          </Link>
          <Link
            href="tel:2347064642407"
            className="text-base underline md:text-lg"
          >
            +234 706 464 2407
          </Link>

          <div className="flex items-center gap-4">
            <SheetClose asChild>
              <Link href="#">
                <IoLogoLinkedin className="size-6" />
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#">
                <FaTwitter className="size-6" />
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#">
                <FaInstagram className="size-6" />
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="#">
                <FaFacebook className="size-6" />
              </Link>
            </SheetClose>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MegaMenu;
