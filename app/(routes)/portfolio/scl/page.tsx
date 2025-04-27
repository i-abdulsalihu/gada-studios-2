import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";
import React from "react";

export default function SCLPage() {
  return (
    <div className="overflow-x-clip pt-[100px]">
      <div className="w-full bg-[#90919C0F] py-[74px]">
        <Wrapper className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-[250]">Overview</p>
            <h2>SCL</h2>
          </div>

          <div className="flex items-start justify-between gap-16">
            <p className="max-w-[600px] text-lg font-normal tracking-[2%]">
              Lorem ipsum dolor sit amet consectetur. Nibh phasellus lacus sem
              ut lorem eget risus id bibendum. Diam quis quisque non velit urna
              gravida. Commodo urna dictumst vitae dis tristique pharetra
              adipiscing nunc pretium. Egestas viverra magna et et ut nec.
            </p>

            <div className="flex gap-5">
              <div className="flex w-[310px] flex-col gap-4">
                <p className="text-xl font-black text-[#B88745]">Client</p>
                <p className="text-lg font-normal">
                  Kaduna Capital Territory Authority (K.C.T.A.)
                </p>
              </div>
              <div className="flex w-[310px] flex-col gap-4">
                <p className="text-xl font-black text-[#B88745]">
                  Project Type
                </p>
                <p className="text-lg font-normal">
                  Brand Identity & Product Design, Product Development, Mobile
                  App Design
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="bg-black-800 relative aspect-video w-full lg:aspect-[2.3]">
        <Image
          src="/images/projects/scl-banner-2.png"
          alt="SCL"
          priority
          quality={100}
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <div className="flex max-w-[644px] flex-col gap-4">
            <p className="text-xl font-black text-[#B88745]">About the Brand</p>
            <p className="text-lg font-normal">
              KadCity app was an embodiment of the kaduna state mayor&apos;s
              mind, an initiative that aimed to involve the citizens of Kaduna
              state, Nigeria, in the development of the state. It had the goal
              of bridging the gap between the government, and its people, by
              seeing the city through the eyes of it&apos;s citizens.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <div className="bg-black-600 h-[296px] w-full"></div>
        <div className="bg-black-700 h-[580px] w-full"></div>
        <div className="bg-black-800 h-[401px] w-full"></div>

        <Wrapper className="mt-7">
          <div className="ml-auto flex max-w-[541px] flex-col gap-4">
            <p className="text-xl font-black text-[#B88745]">
              Brand Identity Goals
            </p>
            <p className="max-w-[466px] text-lg font-normal">
              The goal of the brand identity is to embody the core of what Xanda
              Farms is. A logo design that expresses and carries the values and
              long-term goals of the brand.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <div className="flex flex-col gap-6">
            <p className="text-xl font-black">Brand Identity</p>

            <div className="flex h-[350px] gap-5">
              <div className="bg-black-800 h-full w-[446px] rounded-lg"></div>
              <div className="bg-black-800 h-full flex-1 rounded-lg"></div>
            </div>

            <p className="max-w-[633px] text-xl font-normal">
              The Logo was created to reflect simplicity, luxury, and Boldness.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="relative py-[90px]">
        <div className="absolute top-1/2 -left-1/5 mx-auto flex h-[456px] w-[760px] -translate-y-1/2 items-center justify-center">
          <div className="bg-black-800 h-full w-[565px]"></div>
        </div>
        <div className="mx-auto flex h-[568px] w-[645px] items-center justify-center">
          <div className="bg-black-800 h-full w-[461px]"></div>
        </div>
        <div className="absolute top-1/2 -right-1/5 mx-auto flex h-[456px] w-[760px] -translate-y-1/2 items-center justify-center">
          <div className="bg-black-800 h-full w-[565px]"></div>
        </div>
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <div className="ml-auto max-w-[628px]">
            <p className="text-4xl leading-[48px] font-normal">
              The colour selection for the brand, loosely based off of Kaduna
              state&apos;s official colors and strictly adheres to KCTA&apos;s
              brand colors. This maintained a sense of consistency with state
              related projects and endeavors.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <div className="bg-black-800 h-[918px] w-full"></div>
        <Wrapper>
          <div className="bg-black-900 -mt-32 ml-auto h-[358px] w-[449px]"></div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <p className="max-w-[466px] text-lg font-normal">
            The product concept stems from the idea of having citizens be on the
            lookout for abnormalities in their environment. Having them involved
            in governance gives them a “
            <span className="text-primary-500">watchman</span>” tag. This
            inspired the eye symbol incorporated into the logo design.
          </p>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <div className="grid grid-cols-2 gap-4 p-4 md:gap-6 md:p-6">
          <div className="bg-black-800 aspect-square w-full"></div>
          <div className="bg-black-800 aspect-square w-full"></div>
        </div>
      </div>

      <div className="relative aspect-square w-full py-[90px]">
        <Image
          src="/images/projects/scl-banner.png"
          alt="SCL"
          quality={100}
          priority
          fill
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      <div className="py-[90px]">
        <div className="bg-black-800 h-[777px] w-full"></div>
        <Wrapper className="mt-6">
          <div className="max-w-[267px]">
            <p className="text-xl font-normal">
              We partnered with the Kaduna state Government to bring her vision
              to life, giving denizens and visitors the ability to engage with
              the systems that could be impacting their daily lives.
            </p>
          </div>
        </Wrapper>

        <div className="py-[90px]">
          <div className="bg-black-800 h-[777px] w-full"></div>
        </div>
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <div className="ml-auto max-w-[595px] space-y-5">
            <p className="text-xl font-normal">
              In early-stages, we rolled out a brand architecture, visual
              identity/brand, design system (including iconography, pattern
              variants) and visual language that could seamlessly communicate
              the ethos of Yohan to the world, with a level of interactivity
              that activates their visual senses.
            </p>
            <p className="text-xl font-normal">
              Yohan is positioned to put Luxury, simplicity and Inclusion into
              the hands of its users.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="relative py-[90px]">
        <div className="absolute top-1/2 -left-1/5 mx-auto flex h-[456px] w-[760px] -translate-y-1/2 items-center justify-center">
          <div className="bg-black-800 h-full w-[565px]"></div>
        </div>
        <div className="mx-auto flex h-[568px] w-[645px] items-center justify-center">
          <div className="bg-black-800 h-full w-[461px]"></div>
        </div>
        <div className="absolute top-1/2 -right-1/5 mx-auto flex h-[456px] w-[760px] -translate-y-1/2 items-center justify-center">
          <div className="bg-black-800 h-full w-[565px]"></div>
        </div>
      </div>
    </div>
  );
}
