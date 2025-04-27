import CTA from "@/components/shared/cta";
import Wrapper from "@/components/shared/wrapper";
import InitiativesBanner from "./_components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Initiatives",
};

export default function InitiativesPage() {
  return (
    <div className="relative h-full">
      <div className="relative mt-[100px] w-full py-[100px]">
        <InitiativesBanner />
      </div>

      <Wrapper className="relative w-full space-y-10 py-[100px]">
        {["Aniket", "Note App"].map((title, index) => (
          <div
            className="flex gap-6 [&:nth-child(2n)]:ml-auto [&:nth-child(2n)]:flex-row-reverse"
            key={index}
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-black">{title}</h3>
              <div className="bg-black-800 h-[460px] w-[415px]"></div>

              <div className="my-6 flex items-start justify-between gap-4">
                <p className="max-w-[265px] flex-1 text-lg leading-[1.2] font-normal">
                  Logo Design, Website design, Product Development
                </p>
                <p className="text-lg font-black">2021 - 2021</p>
              </div>

              <span className="h-0 w-full border border-white" />
            </div>

            <p className="mt-[74px] w-[525px] text-base">
              Lorem ipsum dolor sit amet consectetur. Sed laoreet hendrerit
              venenatis quisque senectus. Diam ipsum ac pharetra nibh ut.
              Ultrices turpis egestas venenatis venenatis et. Condimentum ornare
              varius quis dictum.
            </p>
          </div>
        ))}
      </Wrapper>

      <CTA
        imgUrl="/images/initiatives-cta.png"
        className="brightness-[40%] grayscale"
      />
    </div>
  );
}
