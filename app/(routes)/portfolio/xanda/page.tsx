import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";
import React from "react";

export default function XandaFarmsPage() {
  return (
    <div className="overflow-x-clip pt-[100px]">
      <div className="w-full bg-[#90919C0F] py-[74px]">
        <Wrapper className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-[250]">Overview</p>
            <h2>Xanda Farms</h2>
          </div>

          <div className="flex items-start justify-between gap-16">
            <p className="max-w-[600px] text-lg font-normal tracking-[2%]">
              With a focus on dairy production, Xanda Farms is an agricultural
              brand that specializes in crop and livestock farming. Given the
              rising demand for dairy products in Nigeria, Xanda Farms looked
              for a distinctive brand identity that would capture its dedication
              to agricultural innovation and sustainability.
            </p>

            <div className="flex gap-5">
              <div className="flex w-[310px] flex-col gap-4">
                <p className="text-xl font-black text-[#B88745]">Client</p>
                <p className="text-lg font-normal">Xanda Farms</p>
              </div>
              <div className="flex w-[310px] flex-col gap-4">
                <p className="text-xl font-black text-[#B88745]">
                  Project Type
                </p>
                <p className="text-lg font-normal">
                  Brand Identity, Merch & Apparel
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="bg-black-800 relative aspect-video w-full lg:aspect-[2.3]">
        <Image
          src="/images/projects/xanda-banner.jpeg"
          alt="Xanda Farms"
          priority
          quality={100}
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="py-[90px]">
        <Wrapper className="flex flex-col gap-8">
          <div className="flex max-w-[644px] flex-col gap-4">
            <p className="text-xl font-black text-[#B88745]">About the Brand</p>
            <p className="text-lg font-normal">
              Xanda Farms is an Agric-business centred on livestock and crop
              farming. It aims to be a top distributor of agricultural produce
              and livestock in Nigeria. For a start, its focus is on dairy
              farming.
            </p>
          </div>
          <div className="flex max-w-[644px] flex-col gap-4">
            <p className="text-xl font-black text-[#B88745]">
              Branding Approach
            </p>
            <p className="text-lg font-normal">
              We developed a visual identity based on key qualities like Defend,
              Protect, Passion, Dairy, Traditional, and Modern. The end result,
              a design that exudes sustainability, creativity, and
              dependability.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <div className="bg-black-600 h-[552px] w-full"></div>
        <div className="bg-black-700 h-[842px] w-full"></div>
        <div className="bg-black-800 h-[438px] w-full"></div>
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <div className="flex max-w-[777px] flex-col gap-4">
            <p className="text-xl font-black text-[#B88745]">The Vision</p>
            <p className="max-w-[644px] text-lg font-normal">
              Gada aimed to develop a brand identity that blends modernity and
              tradition. While keeping close ties to Nigeria&apos;s farming
              heritage, we wanted Xanda Farms to stand out as a leader in the
              agricultural industry.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-black-600 h-[392px] lg:h-[492px]"></div>
          <div className="bg-black-600 h-[392px] lg:col-span-2 lg:h-[492px]"></div>
          <div className="bg-black-600 h-[392px] lg:col-span-2 lg:h-[492px]"></div>
          <div className="bg-black-600 h-[392px] lg:h-[492px]"></div>
        </div>
      </div>

      <div className="py-[90px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
        </div>
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <div className="flex max-w-[777px] flex-col gap-4">
            <p className="text-xl font-black text-[#B88745]">Stationery</p>
            <p className="max-w-[644px] text-lg font-normal">
              All stationery materials to be branded. From books, pens, business
              cards, letterheads and the likes.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
          <div className="bg-black-600 aspect-[1.1] w-full"></div>
        </div>
      </div>

      <div className="py-[90px]">
        <Wrapper>
          <div className="ml-auto flex max-w-[472px] flex-col gap-4">
            <p className="text-xl font-black text-[#B88745]">Merchandise</p>
            <p className="text-lg font-normal">
              All swag, and clothing materials to be branded.
            </p>
          </div>
        </Wrapper>
      </div>

      <div className="py-[90px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="bg-black-600 h-[434px] w-full"></div>
          <div className="bg-black-600 h-[434px] w-full"></div>
          <div className="bg-black-600 h-[434px] w-full md:col-span-2 md:h-[830px]"></div>
        </div>
      </div>
    </div>
  );
}
