"use client";

import React, { FormEvent, useState } from "react";
import MaxWrapper from "./max-wrapper";
import Link from "next/link";
import LogoVariant from "./logo-variant";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { BsCheck2 } from "react-icons/bs";
import { footerSocials } from "@/lib/static";

const Footer = () => {
  const [newsletter, setNewsletter] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="mt-96 rounded-t-[50px] bg-black-950 px-0 sm:rounded-t-[100px] sm:px-8 lg:rounded-t-[200px] lg:px-0">
      <MaxWrapper className="pb-14 pt-20 md:py-[167px]">
        <div className="flex flex-col justify-between gap-8 md:gap-6 lg:flex-row">
          <div className="w-full md:max-w-[600px] lg:max-w-[478px]">
            <h2 className="mb-6 md:mb-14">Hey There!</h2>

            <div className="flex flex-col gap-3 md:gap-6">
              <p className="text-base md:text-lg">
                This is a good place to start.
              </p>
              <p className="text-base md:text-lg">
                Tell us about your product, your timeline, how you heard about
                us, and where you’re located.
              </p>
              <p className="text-base md:text-lg">
                We read every message, and we reach out too. So thanks for
                reaching out in advance.
              </p>
            </div>
          </div>

          <div className="w-full lg:max-w-[629px]">
            <form
              onSubmit={submitForm}
              className="flex w-full flex-col gap-8 md:gap-14"
            >
              <div className="flex w-full flex-col items-start gap-8 sm:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <Label htmlFor="name">Name*</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-8 sm:flex-row">
                <div className="flex w-full flex-col gap-2">
                  <Label htmlFor="about">How did you here about us?</Label>
                  <Input
                    id="about"
                    placeholder="Type in your answer"
                    className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Label htmlFor="stage">What stage is your company ?</Label>
                  <Input
                    id="stage"
                    placeholder="Select One"
                    className="w-full rounded-none border-transparent border-b-white bg-transparent p-0"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col gap-2">
                <Label htmlFor="message">Type your message*</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what you need us to know"
                  className="w-full resize-none rounded-none border-transparent border-b-white bg-transparent p-0"
                />
              </div>

              <div className="flex w-full items-center justify-between gap-2">
                <div
                  onClick={() => setNewsletter(!newsletter)}
                  role="button"
                  className="flex select-none items-center gap-3"
                >
                  <div className="flex size-4 items-center justify-center rounded-sm border">
                    {newsletter && <BsCheck2 className="size-4" />}
                  </div>
                  <p className="text-sm font-normal text-black-600">
                    Signup to Newsletter
                  </p>
                </div>
                <Button size={"lg"} className="w-max">
                  <span>See you soon</span>
                  <ArrowRight className="ml-2 !size-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </MaxWrapper>

      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex flex-col gap-10"
      >
        <MaxWrapper className="flex flex-wrap justify-between gap-4 sm:gap-8">
          <div>
            <Link href="/">
              <LogoVariant variant={isHovered ? "secondary" : "white"} />
            </Link>
          </div>

          <p className="w-full max-w-[491px] text-base md:leading-[26px]">
            We build Identities and products for ambitious brands. We are the
            bridge that connects the dots between your business model and your
            user&apos;s needs.
          </p>

          <div className="flex w-full flex-col gap-2 sm:w-max">
            <p
              role="button"
              className="text-base font-normal underline md:text-lg"
            >
              gadastudious240@gmail.com
            </p>
            <p
              role="button"
              className="text-base font-normal underline md:text-lg"
            >
              +234 706 464 2407
            </p>
          </div>

          <div className="flex max-w-[184px] flex-col gap-4 md:gap-2">
            <Button>Get in touch</Button>

            <div className="flex items-center justify-evenly">
              {footerSocials.map(({ path, label, icon: Icon }) => (
                <Link href={path} key={label}>
                  <Icon
                    className={cn(
                      "size-6 text-white transition-colors duration-300",
                      {
                        "text-gada-500": isHovered,
                      },
                    )}
                  />
                </Link>
              ))}
            </div>
          </div>
        </MaxWrapper>

        <div
          className={cn(
            "h-16 w-full pt-4 transition-all delay-100 duration-700 md:h-[175px] md:pt-14",
            {
              "pt-0 md:pt-0": isHovered,
            },
          )}
        >
          <MaxWrapper className="size-full overflow-y-clip">
            <svg
              viewBox="0 0 1392 350"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto size-auto"
            >
              <path
                d="M167.782 150.27H348.556C359.014 260.826 286.306 349.47 173.758 349.47C69.676 349.47 0.454001 272.778 0.454001 176.166C0.454001 80.55 67.684 0.869969 174.754 0.869969C260.41 0.869969 324.154 52.662 341.086 124.872H248.956C237.004 97.98 209.614 81.048 174.256 82.044C116.488 83.538 84.118 124.872 84.118 174.672C84.118 224.97 116.986 268.296 175.75 268.296C215.092 268.296 244.474 250.866 257.422 222.978H167.782V150.27ZM700.739 342H607.613L584.207 280.248H454.727L431.819 342H342.179L475.145 8.33999H567.275L700.739 342ZM518.969 108.936L481.121 210.528H557.813L518.969 108.936ZM722.527 342V8.33999H866.449C967.045 8.33999 1039.75 78.06 1039.75 174.174V175.668C1039.75 271.782 967.045 342 866.449 342H722.527ZM864.955 88.02H804.697V262.32H864.955C918.739 262.32 956.089 227.958 956.089 175.668V174.174C956.089 121.884 918.739 88.02 864.955 88.02ZM1391.81 342H1298.69L1275.28 280.248H1145.8L1122.89 342H1033.25L1166.22 8.33999H1258.35L1391.81 342ZM1210.04 108.936L1172.19 210.528H1248.89L1210.04 108.936Z"
                className={cn(
                  "fill-white transition-colors delay-100 duration-700",
                  {
                    "fill-gada-500": isHovered,
                  },
                )}
              />
            </svg>
          </MaxWrapper>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
