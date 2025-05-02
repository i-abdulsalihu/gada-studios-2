import Wrapper from "@/components/shared/wrapper";
import BrandingBanner from "./_components/banner";
import Image from "next/image";
import CTA from "@/components/shared/cta";

export default function BrandingPage() {
  return (
    <div className="relative h-full">
      <div className="relative mt-[100px] w-full">
        <BrandingBanner />
      </div>

      <div className="mt-[665px]">
        <Wrapper>
          <div className="ml-auto flex max-w-[810px] gap-4">
            <div className="bg-black-800 relative mt-[339px] h-[172px] w-[197px] overflow-hidden">
              <Image
                src="/images/pattern.jpg"
                alt=""
                fill
                priority
                quality={100}
              />
            </div>

            <div className="ml-auto max-w-[582px]">
              <div className="bg-black-800 relative mr-16 ml-auto h-[172px] w-[197px] overflow-hidden">
                <Image
                  src="/images/pattern.jpg"
                  alt=""
                  fill
                  priority
                  quality={100}
                />
              </div>
              <p className="text-2xl leading-[38.4px]">
                At Gada Studios, we&apos;re passionate about emphasizing the
                essence of who you are, what you stand for, and why it matters.
                Crafting brands that command attention, inspire loyalty, and
                fuel success.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="mt-[593px]">
        <Wrapper className="flex gap-5">
          <div className="flex w-max flex-col gap-5">
            <div className="group flex bg-[#FAAAFA]">
              <div className="bg-black-800 relative aspect-[1.2] w-[307px] overflow-hidden">
                <Image
                  src="/images/strategic-clarity.jpg"
                  alt="Strategic Clarity"
                  fill
                  priority
                  quality={100}
                  className="origin-top-left transition-transform duration-500 group-hover:scale-125"
                />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex flex-col gap-4">
                  <p className="text-black-800 text-2xl font-normal">
                    What sets us apart
                  </p>
                  <h4 className="text-black-700 text-[40px] leading-[48px] font-black">
                    Strategic Clarity
                  </h4>
                </div>

                <p className="text-black-700 text-base leading-[1.3] font-normal">
                  We dig deep to understand your brand DNA, your target market,
                  and your competitive landscape.
                </p>
              </div>
            </div>

            <div className="mt-[42px] flex max-w-[582px] flex-col gap-2">
              <h5 className="text-[32px] leading-[48px] font-black">
                Let&apos;s work together to build a brand that Inspires Action!
              </h5>
              <svg
                className="h-[41px] w-[155px]"
                viewBox="0 0 155 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M121.309 23L146.375 23L134.846 37L137.779 40.5L154.25 20.5L137.779 0.500002L134.846 4L146.375 18L0.25 18L0.25 20.5L121.309 23Z"
                  className="fill-white"
                />
              </svg>
            </div>
          </div>

          <div className="group flex max-w-[307px] flex-col bg-[#dada69]">
            <div className="bg-black-800 relative aspect-[1.3] w-[307px] overflow-hidden">
              <Image
                src="/images/creative-brilliance.jpg"
                alt="Creative Brilliance"
                fill
                priority
                quality={100}
                className="origin-top-left transition-transform duration-500 group-hover:scale-125"
              />
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-black-700 text-[40px] leading-[48px] font-black">
                  Creative Brilliance
                </h4>
              </div>

              <p className="text-black-700 text-base leading-[1.3] font-normal">
                Our team of seasoned designers and storytellers will bring your
                brand to life with a unique and personal voice
              </p>
            </div>
          </div>

          <div className="group flex max-w-[307px] flex-col-reverse bg-[#9499FF]">
            <div className="bg-black-800 relative aspect-[1.3] w-[307px] overflow-hidden">
              <Image
                src="/images/measurable-impact.jpg"
                alt="Measurable Impact"
                fill
                priority
                quality={100}
                className="origin-top-left transition-transform duration-500 group-hover:scale-125"
              />
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-black-700 text-[40px] leading-[48px] font-black">
                  Measurable Impact
                </h4>
              </div>

              <p className="text-black-700 text-base leading-[1.3] font-normal">
                We focus on process and results, ensuring your brand fuels
                growth and engagement.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="my-[1000px] flex pl-[78px]">
        <div className="flex-1 border-l">
          <div className="p-6 pt-[283px]">
            <div className="flex flex-col gap-2">
              <div className="size-[31px] rounded-full bg-[#D9D9D9]" />
              <p className="text-base font-normal text-white">Identity</p>
            </div>
          </div>
        </div>
        <div className="max-w-[40%] flex-1 border-l">
          <div className="p-6 pt-[173px]">
            <div className="flex flex-col gap-2">
              <div className="size-[31px] rounded-full bg-[#D9D9D9]" />
              <p className="text-base font-normal text-white">Identity</p>
            </div>
          </div>
        </div>
        <div className="max-w-[60%] flex-1 border-l">
          <div className="p-6 pt-[54px]">
            <div className="flex flex-col gap-2">
              <div className="size-[31px] rounded-full bg-[#D9D9D9]" />
              <p className="text-base font-normal text-white">Identity</p>
            </div>
          </div>
        </div>
      </div>

      <CTA
        imgUrl="/images/initiatives-cta.png"
        className="brightness-[40%] grayscale"
        title="Don't settle for ordinary. Let's create a brand that's extraordinary!"
      />
    </div>
  );
}
