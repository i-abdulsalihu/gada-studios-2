import Wrapper from "@/components/shared/wrapper";
import SoftwareDevelopmentBanner from "./_components/banner";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/shared/cta";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Craft stunning, user-friendly websites and mobile apps tailored to your brand's identity and goals. From sleek layouts to responsive designs, we create digital experiences that captivate and convert.",
  },
  {
    name: "Front-End Development",
    description:
      "Craft stunning, user-friendly websites and mobile apps tailored to your brand's identity and goals. From sleek layouts to responsive designs, we create digital experiences that captivate and convert.",
  },
  {
    name: "Back-End Development",
    description:
      "Craft stunning, user-friendly websites and mobile apps tailored to your brand's identity and goals. From sleek layouts to responsive designs, we create digital experiences that captivate and convert.",
  },
  {
    name: "No-Code Solutions",
    description:
      "Craft stunning, user-friendly websites and mobile apps tailored to your brand's identity and goals. From sleek layouts to responsive designs, we create digital experiences that captivate and convert.",
  },
  {
    name: "Android Development",
    description:
      "Craft stunning, user-friendly websites and mobile apps tailored to your brand's identity and goals. From sleek layouts to responsive designs, we create digital experiences that captivate and convert.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="relative h-full">
      <div className="relative my-[200px] w-full">
        <SoftwareDevelopmentBanner />
      </div>

      <div className="mt-[120px]">
        <Wrapper>
          <div className="mx-auto flex max-w-[679px] flex-col gap-2">
            <p className="text-black-300 text-xl leading-[28.8px] font-bold">
              From design to frontend finesse, we&apos;re here to turn your
              ideas into reality. From design to frontend finesse, we&apos;re
              here to turn your ideas into reality.
            </p>
            <p className="text-black-300 text-lg leading-[28.8px] font-normal">
              We design and build innovative, scalable, and user friendly
              software tailored to meet your unique business needs. From design
              to frontend finesse, we&apos;re here to turn your ideas into
              reality. We design and build innovative, scalable, and user
              friendly software tailored to meet your unique business needs.
              From design to frontend finesse, we&apos;re here to turn your
              ideas into reality.
            </p>
            <Link
              href="/portfolio"
              className="text-black-300 text-xl leading-[28.8px] font-bold underline"
            >
              View Our Portfolio
            </Link>
          </div>
        </Wrapper>
      </div>

      <div className="mt-[160px] px-6 md:px-8">
        <div className="bg-black-800 relative aspect-video w-full overflow-hidden xl:h-[688px]">
          <Image
            src="/images/projects/digital-solutions.png"
            alt=""
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-[160px]">
        <Wrapper className="flex flex-col gap-2">
          <h3>Our Services</h3>
          <p className="text-lg font-normal">
            Design with Precision and Vision in 3D.
          </p>
        </Wrapper>

        <div className="mt-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[108px] w-full border-b border-b-[#FFFFFF2B]"
            >
              <Wrapper className="h-full">
                <div className="flex size-full items-center">
                  <p className="text-2xl font-normal transition-opacity duration-500 group-hover:opacity-0">
                    {service.name}
                  </p>
                </div>
              </Wrapper>

              <div className="bg-black-800 absolute top-0 left-0 size-full origin-top-left scale-0 opacity-0 duration-700 group-hover:scale-100 group-hover:opacity-100">
                <Image
                  src="/images/ux-design.jpg"
                  alt=""
                  priority
                  quality={100}
                  fill
                  className="size-full object-cover"
                />
              </div>

              <div className="absolute top-[77px] right-[153px] z-10 flex w-[478px] origin-top-left scale-0 flex-col gap-4 bg-[#131313] p-6 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100">
                <p className="text-primary-500 text-[26px]">
                  <sup className="mr-1 !text-base font-medium">
                    {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                  </sup>
                  <span className="font-bold">{service.name}</span>
                </p>
                <p className="text-sm leading-[175%] text-[#CDCDCD]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-[400px]">
        <div className="grid aspect-video w-full grid-cols-12 gap-0 xl:h-[720px]">
          {/* Red - Large section (left half, top) */}
          <div className="bg-black-200 col-span-6 row-span-2 flex items-center justify-center">
            <p className="text-2xl font-medium">black-200</p>
          </div>

          {/* Light Blue - Top right section */}
          <div className="bg-black-300 col-span-4 flex items-center justify-center">
            <p className="text-2xl font-medium">black-300</p>
          </div>

          {/* Light Green - Top far right section */}
          <div className="bg-black-400 col-span-2 flex items-center justify-center">
            <p className="text-2xl font-medium">black-400</p>
          </div>

          {/* Magenta/Pink - Large section (middle right) */}
          <div className="bg-black-500 col-span-4 row-span-2 flex items-center justify-center">
            <p className="text-2xl font-medium">black-500</p>
          </div>

          {/* Blue - Right section */}
          <div className="bg-black-600 col-span-2 flex items-center justify-center">
            <p className="text-2xl font-medium">black-600</p>
          </div>

          {/* Orange - Bottom left section */}
          <div className="bg-black-700 col-span-3 flex items-center justify-center">
            <p className="text-2xl font-medium">black-700</p>
          </div>

          {/* Bright Green - Bottom middle-left section */}
          <div className="bg-black-800 col-span-3 flex items-center justify-center">
            <p className="text-2xl font-medium">black-800</p>
          </div>

          {/* Dark Blue - Bottom right section */}
          <div className="bg-black-900 col-span-2 flex items-center justify-center">
            <p className="text-2xl font-medium">black-900</p>
          </div>
        </div>
      </div>

      <CTA imgUrl="/images/software-cta.jpg" className="brightness-[40%]" />
    </div>
  );
}
