import Wrapper from "@/components/shared/wrapper";
import Paragraph from "@/components/shared/paragraph";
import Services from "./_components/services";
import ExpertiseBanner from "./_components/banner";
import Approach from "./_components/approach";
import CTA from "@/components/shared/cta";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Expertise",
};

const expertise = [
  {
    title: "Branding",
    description: "Your brand reflects your identity. We bring it to life.",
    path: "branding",
  },
  {
    title: "Software Development",
    description:
      "We build innovative, scalable, user-friendly software for your business.",
    path: "software-development",
  },
  {
    title: "3D Visualization",
    description: "We create stunning 3D architectural models.",
    path: "3d-visualization",
  },
  {
    title: "Marketing",
    description:
      "Data-driven strategies and creative solutions for impactful results.",
    path: "marketing",
  },
];

export default function OurExpertise() {
  return (
    <div className="relative h-full">
      <ExpertiseBanner />

      <div className="flex flex-col gap-10">
        <Wrapper>
          <div className="flex flex-col gap-9 py-[100px] md:py-[239px]">
            <Paragraph
              value="We're a full-service design agency passionate about crafting
            brands that stand out."
              className="heading-1 font-normal tracking-wide lg:leading-[110.4px]"
            />
            <p className="relative max-w-[858px] text-lg font-normal md:text-xl lg:text-2xl">
              Specializing in product-focused businesses, we collaborate with
              visionaries—whether ambitious startups or global
              enterprises—bringing 25+ years of combined experience to every
              project.
            </p>
          </div>

          <div className="flex max-w-[1124px] flex-col gap-6 sm:flex-row">
            <div className="bg-black-800 relative h-[218px] w-full max-w-[522px]">
              <Image
                src="/images/strategic.png"
                alt="strategic"
                fill
                priority
                quality={100}
                objectFit="cover"
              />
            </div>
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

        <Wrapper className="grid grid-cols-1 gap-6 py-[100px] md:grid-cols-2 md:py-[239px]">
          <div className="flex flex-col gap-14">
            <p className="relative max-w-[858px] text-lg font-normal md:text-xl lg:text-2xl lg:leading-9">
              We adhere to a design thinking methodology that commences with a
              series of interview sessions during the discovery phase.
              Subsequently, we conduct comprehensive research, document our
              findings, and formulate a strategic plan for the project. This
              process is executed collaboratively with our clients, ensuring
              their active involvement at every stage.
            </p>
            <p className="relative max-w-[858px] text-lg font-normal md:text-xl lg:text-2xl lg:leading-9">
              Upon the formulation of a strategy, we generate innovative ideas
              and refine them iteratively until an effective solution is
              approved. We proceed to create prototypes and conduct user testing
              to evaluate the solution&apos;s performance with end-users and its
              alignment with the brand&apos;s mission and objectives.
            </p>
            <p className="relative max-w-[858px] text-lg font-normal md:text-xl lg:text-2xl lg:leading-9">
              In the final stages of the project, we meticulously prepare files
              for launch and facilitate a seamless handover. We articulate a
              guideline that is designed for clarity and ease of comprehension.
            </p>
          </div>

          <div className="bg-black-800 relative h-full w-full">
            <Image
              src="/images/formulation.png"
              alt="formulation"
              fill
              priority
              quality={100}
              objectFit="cover"
            />
          </div>
        </Wrapper>

        <div className="relative flex h-full flex-col gap-1">
          <Services />
        </div>
      </div>

      <div className="py-[100px] md:py-[239px]">
        <Wrapper className="grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2">
          {expertise.map((exp, _index) => (
            <Link
              href={`/expertise/${exp.path}`}
              key={_index}
              className="flex flex-col gap-10"
            >
              <div className="bg-black-200 h-[400px] w-full"></div>
              <div className="flex flex-col gap-4">
                <h4 className="text-[40px] font-extrabold">{exp.title}</h4>
                <p className="max-w-[413px] text-lg leading-6">
                  {exp.description}
                </p>
              </div>
            </Link>
          ))}
        </Wrapper>
      </div>

      <Approach />
      <CTA />
    </div>
  );
}
