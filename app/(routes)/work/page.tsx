import { Metadata } from "next";

import CTA from "@/components/shared/cta";
import Paragraph from "@/components/shared/paragraph";
import Wrapper from "@/components/shared/wrapper";
import TeamSection from "./_components/team-section";
import Balance from "./_components/balance";

export const metadata: Metadata = {
  title: "Behind The Work",
};

export default function BehindTheWorkPage() {
  return (
    <div className="relative h-full">
      <div className="mt-[100px] py-[100px]">
        <Wrapper className="flex h-full flex-col gap-4">
          <div className="flex h-[calc(100dvh-300px)] flex-col gap-4">
            <h1 className="leading-28">
              The dreamers, the thinkers, and the doers
            </h1>
            <p className="relative z-[1] max-w-[737px] text-base font-normal md:text-lg">
              Your partners in Creative excellence
            </p>
          </div>

          <div className="flex flex-col gap-9 pb-[100px] md:pb-[239px]">
            <Paragraph
              value="We are made up of creatives who don't play it safe."
              className="heading-1 font-normal tracking-wide lg:leading-[110.4px]"
            />
            <p className="relative z-[1] max-w-[858px] text-lg font-normal md:text-xl lg:text-[27px]">
              GADA operates as a specialized agency in branding, marketing and
              comms, 3D Visualization, and product design, dedicated to the
              creation of impactful and effective brands. Our primary objective
              is to establish a seamless connection between your business model
              and the distinct requirements of your users and help you structure
              systems that make you better.
            </p>
          </div>

          <div className="ml-auto flex max-w-[629px] flex-col gap-10 py-[90px] md:pb-[150px]">
            <p className="relative flex-1 text-lg font-normal md:text-xl lg:text-2xl">
              All great ideas needs a team to bring it to life. We&apos;re a
              team of avid designers, developers, writers, strategists, and
              dreamers who thrive on turning challenges into opportunities. With
              a shared love for creativity and innovation, we&apos;re more than
              just a team; we&apos;re your partners in building a brighter
              future for your brand.
            </p>

            <span className="h-0 w-full border border-white" />
          </div>
        </Wrapper>
      </div>

      <div className="bg-black-950 w-full overflow-x-auto">
        <TeamSection />
      </div>

      <Wrapper className="mt-[513px] mb-[425px] flex h-full flex-col gap-[114px]">
        <div className="flex w-full max-w-[1064px] justify-between gap-10">
          <div className="flex max-w-[650px] flex-col gap-8">
            <div className="flex w-max flex-col gap-8">
              <h1 className="relative w-max leading-none">Our Vision</h1>
              <span className="h-0 w-full border border-white" />
            </div>
            <h4 className="text-[32px] leading-[40px] font-black">
              Our Vision is to facilitate the birth of the future by bridging
              the gap between idea, and realization.
            </h4>
            <p className="text-xl font-normal">
              We try to transform the way organizations run by advocating
              correct structure and making effective design, branding, and
              strategy important components of any company&apos;s framework.
            </p>
          </div>

          <div className="bg-black-800 mt-6 size-[197px]"></div>
        </div>
        <div className="flex w-full max-w-[1064px] flex-row-reverse justify-between gap-10">
          <div className="flex max-w-[650px] flex-col gap-8">
            <div className="flex w-max flex-col gap-8">
              <h1 className="relative w-max leading-none">Our Mission</h1>
              <span className="h-0 w-full border border-white" />
            </div>
            <h4 className="text-[32px] leading-[40px] font-black">
              Our mission is to act as a bridge between products, businesses &
              their objectives.
            </h4>
            <p className="text-xl font-normal">
              We are dedicated to assisting organizations and companies reach
              their objectives through effective design, branding, and strategy.
            </p>
          </div>

          <div className="bg-black-800 mt-auto size-[197px]"></div>
        </div>
      </Wrapper>

      <div className="mt-[513px] mb-[425px] flex h-full flex-col gap-[114px]">
        <Balance />
      </div>

      <CTA imgUrl="/images/work-cta.jpeg" className="brightness-[30%]" />
    </div>
  );
}
