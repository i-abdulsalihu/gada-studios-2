import { Metadata } from "next";

import CTA from "@/components/shared/cta";
import Paragraph from "@/components/shared/paragraph";
import Wrapper from "@/components/shared/wrapper";
import TeamSection from "./_components/team-section";
import Balance from "./_components/balance";
import MissionVision from "./_components/mission-vision";

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

      <div className="mt-[513px] mb-[425px] h-full">
        <MissionVision />
      </div>

      <div className="mt-[513px] mb-[425px] flex h-full flex-col gap-[114px]">
        <Balance />
      </div>

      <CTA imgUrl="/images/work-cta.jpeg" className="brightness-[30%]" />
    </div>
  );
}
