"use client";

import Wrapper from "@/components/shared/wrapper";
// import Image from "next/image";
import { Fragment } from "react";

const MarketingBanner = () => {
  return (
    <Fragment>
      <Wrapper className="relative flex h-full flex-col gap-6">
        <h1 className="max-w-[751px] leading-28">
          Creating stories that connect
        </h1>

        {/* <Image
          src="/images/projects/marketing-animate.gif"
          alt="animate"
          width={522}
          height={500}
          priority
          quality={100}
          unoptimized={true}
          className="absolute top-1/2 left-1/2 -z-10 -translate-1/2"
        /> */}

        <div className="ml-auto flex max-w-[737px] flex-col gap-10">
          <h1 className="leading-28">Building brands that succeed</h1>
          <p className="relative flex-1 text-lg font-normal">
            We&apos;re always data-driven, combining creative brilliance with
            strategic insights to deliver results that matter. Imagine exceeding
            your goals, fostering loyalty, and watching your impact grow.
          </p>
        </div>
      </Wrapper>

      <div className="mx-auto mt-[79px] h-px w-full max-w-[1064px] bg-white" />
    </Fragment>
  );
};

export default MarketingBanner;
