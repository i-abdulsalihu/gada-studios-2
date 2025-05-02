import Wrapper from "@/components/shared/wrapper";
import MarketingBanner from "./_components/banner";
import Image from "next/image";
import Ready from "./_components/ready";
import CTA from "@/components/shared/cta";

export default function MarketingPage() {
  return (
    <div className="relative h-full">
      <div className="relative mt-[100px] w-full py-[100px]">
        <MarketingBanner />
      </div>

      <div className="py-[100px]">
        <Wrapper className="flex flex-col gap-[100px] md:gap-[200px]">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: 6 }).map((_, _key) => (
              <div
                key={_key}
                className="bg-black-800 aspect-square w-full"
              ></div>
            ))}
          </div>

          <h3 className="font-medium">
            In today&apos;s dynamic landscape, being heard is no longer enough.
            You need to captivate your audience, forge connections, and inspire
            action.
          </h3>
        </Wrapper>
      </div>

      <div className="flex flex-col gap-10 py-[100px] md:py-[200px]">
        <Wrapper>
          <div className="flex max-w-[1124px] flex-col gap-6 sm:flex-row">
            <div className="w-full max-w-[522px]" />

            <p className="relative flex-1 text-lg font-normal md:text-xl lg:text-2xl">
              At Gada, we believe in the power of strategic marketing and clear
              communications to propel your brand forward. We don&apos;t just
              craft messages, we weave them into every touch point to create a
              resonant and memorable experience.
            </p>
          </div>
        </Wrapper>

        <div className="bg-black-800 relative h-[667px] w-full">
          <Image
            src="/images/strategic-banner.jpeg"
            alt="strategic banner"
            fill
            priority
            quality={100}
            objectFit="cover"
          />
        </div>
      </div>

      <div>
        <Ready />
      </div>

      <div>
        <div className="h-[200dvh]"></div>
        <CTA imgUrl="/images/marketing-cta.jpg" className="brightness-[40%]" />
      </div>
    </div>
  );
}
