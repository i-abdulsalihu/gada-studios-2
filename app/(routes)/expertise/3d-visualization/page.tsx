import Image from "next/image";

import Wrapper from "@/components/shared/wrapper";
import VisualizationBanner from "./_components/banner";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";

export default function VisualizationPage() {
  return (
    <div className="relative h-full">
      <div>
        <VisualizationBanner />
      </div>

      <div className="mt-[168px]">
        <Wrapper className="flex justify-between gap-5">
          <div className="flex max-w-[305px] flex-col gap-4 pt-[372px]">
            <h3>Beyond Blueprints</h3>
            <p className="text-lg leading-[28.8px] font-normal">
              Design with Precision and Vision in 3D.
            </p>
          </div>

          <div className="bg-black-800 relative mx-auto h-[658px] w-[536px] overflow-hidden">
            <Image
              src="/images/blueprint-1.jpg"
              alt="blueprint"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="ml-auto max-w-[305px]">
            <p className="text-lg leading-[28.8px] font-normal">
              No longer confined to flat sketches, your architecture comes alive
              in 3D. Walk through virtual spaces, visualize materials, and
              identify potential challenges before construction begins.
            </p>

            <div className="bg-black-800 relative mt-[307px] ml-auto h-[160px] w-[260px] overflow-hidden">
              <Image
                src="/images/blueprint-2.jpg"
                alt="blueprint"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="mt-[400px]">
        <div className="flex flex-col gap-[90px]">
          <Wrapper className="relative h-[715px]">
            <div className="bg-black-800 absolute top-[98px] left-[160px] h-[126px] w-[208px]">
              <Image
                src="/images/art-1.jpg"
                alt="jp"
                priority
                quality={100}
                objectFit="cover"
                fill
              />
            </div>
            <div className="bg-black-800 relative mx-auto mt-[98px] h-[535px] w-[536px]">
              <Image
                src="/images/art-2.jpg"
                alt="jp"
                priority
                quality={100}
                objectFit="cover"
                fill
              />
            </div>
            <div className="bg-black-800 absolute -bottom-32 left-10 size-[224px]">
              <Image
                src="/images/art-3.jpg"
                alt="jp"
                priority
                quality={100}
                objectFit="cover"
                fill
              />
            </div>
            <div className="bg-black-800 absolute right-10 -bottom-16 h-[126px] w-[224px]">
              <Image
                src="/images/art-4.jpg"
                alt="jp"
                priority
                quality={100}
                objectFit="cover"
                fill
              />
            </div>
          </Wrapper>
        </div>
      </div>

      <div className="mt-[1000px] flex pr-20 xl:pr-40">
        <div className="bg-black-800 relative h-[658px] w-[536px] overflow-hidden">
          <Image
            src="/images/offer-1.jpg"
            alt="offer"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col pl-[60px]">
          <div className="flex items-start justify-between">
            <div className="flex max-w-[345px] flex-col gap-10">
              <h4 className="text-primary-200 text-4xl font-bold">We Offer</h4>
              <p className="text-2xl leading-[28.8px]">
                <span className="text-primary-200">Precision & Detail</span>:
                Our meticulous 3D models capture every part of your design, from
                sweeping curves to intricate details.
              </p>
            </div>

            <div className="bg-black-800 relative h-[160px] w-[260px] overflow-hidden">
              <Image
                src="/images/offer-2.jpg"
                alt="offer"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-auto ml-auto flex max-w-[670px] flex-col gap-6">
            <p className="text-2xl leading-[28.8px]">
              <span className="text-primary-200">Visualization Power</span>:
              Immerse yourself and your clients in photorealistic renderings and
              virtual tours, for clear communication and informed
              decision-making.
            </p>

            <span className="bg-black-300 h-px w-full" />
          </div>
        </div>
      </div>

      <div className="mt-60">
        <div className="group relative h-[792px] w-full overflow-hidden">
          <div className="bg-black-800 absolute top-0 left-0 size-full transition-all duration-[1500ms] hover:brightness-50">
            <Image
              fill
              src="/images/residential-apartment-1.jpg"
              alt="Residential Apartments"
              priority
              quality={100}
              className="size-full origin-top-left object-cover transition-all duration-[1500ms] ease-in-out group-hover:scale-150"
            />
          </div>

          <Wrapper className="pointer-events-none relative flex h-full flex-col justify-end py-[74px]">
            <div className="flex w-max items-center gap-4 rounded-xl transition-all duration-[1500ms] ease-in-out group-hover:bg-[#212121] group-hover:px-6 group-hover:py-3">
              <p className="text-2xl font-normal">Residential Apartments</p>
              <svg
                className="h-4 w-[41px]"
                viewBox="0 0 41 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.00008V9.00008H37L31.5 14.5001L32.92 15.9201L40.84 8.00008L32.92 0.0800781L31.5 1.50008L37 7.00008H0Z"
                  className="fill-white"
                />
              </svg>
            </div>
          </Wrapper>
        </div>
        <div className="group relative h-[792px] w-full overflow-hidden">
          <div className="bg-black-800 absolute top-0 left-0 size-full transition-all duration-[1500ms] hover:brightness-50">
            <Image
              fill
              src="/images/residential-apartment-2.jpg"
              alt="Residential Apartments"
              priority
              quality={100}
              className="size-full origin-top-left object-cover transition-all duration-[1500ms] ease-in-out group-hover:scale-150"
            />
          </div>

          <Wrapper className="pointer-events-none relative flex h-full flex-col justify-end py-[74px]">
            <div className="flex w-max items-center gap-4 rounded-xl transition-all duration-[1500ms] ease-in-out group-hover:bg-[#212121] group-hover:px-6 group-hover:py-3">
              <p className="text-2xl font-normal">Residential Apartments</p>
              <svg
                className="h-4 w-[41px]"
                viewBox="0 0 41 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.00008V9.00008H37L31.5 14.5001L32.92 15.9201L40.84 8.00008L32.92 0.0800781L31.5 1.50008L37 7.00008H0Z"
                  className="fill-white"
                />
              </svg>
            </div>
          </Wrapper>
        </div>
      </div>

      <div className="relative mt-[490px] flex aspect-video w-full items-center">
        <div className="absolute top-0 left-0 -z-[1] size-full">
          <Image
            src="/images/3d-cta.png"
            alt="CTA"
            fill
            priority
            quality={100}
            className="object-cover object-center brightness-[50%]"
          />
        </div>
        <Wrapper className="py-48">
          <div className="z-10 flex w-full max-w-[672px] flex-col gap-2 bg-[#F6F6F6E5] px-6 py-4">
            <p className="text-primary-500 text-4xl leading-11 font-medium">
              Discover the power of 3D modeling with Gada.
            </p>
            <Button variant={500} size="lg" className="w-max px-6">
              <span className="font-normal">Contact Us Today</span>
              <FiArrowRight className="ml-2 !size-5" />
            </Button>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
