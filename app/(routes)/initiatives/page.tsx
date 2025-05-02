import CTA from "@/components/shared/cta";
import Wrapper from "@/components/shared/wrapper";
import InitiativesBanner from "./_components/banner";
import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Initiatives",
};

const initiatives = [
  {
    title: "Aniket",
    subtitle: "Logo Design, Website design, Product Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed laoreet hendrerit venenatis quisque senectus. Diam ipsum ac pharetra nibh ut. Ultrices turpis egestas venenatis venenatis et. Condimentum ornare varius quis dictum.",
    yearStart: 2021,
    yearEnd: 2021,
    path: "kadcity",
    image: "/images/projects/kadcity-banner.png",
  },
  {
    title: "Note App",
    subtitle: "Logo Design, Website design, Product Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed laoreet hendrerit venenatis quisque senectus. Diam ipsum ac pharetra nibh ut. Ultrices turpis egestas venenatis venenatis et. Condimentum ornare varius quis dictum.",
    yearStart: 2021,
    yearEnd: 2021,
    path: "xanda",
    image: "/images/projects/xanda-banner.jpeg",
  },
];

export default function InitiativesPage() {
  return (
    <div className="relative h-full">
      <div className="relative mt-[100px] w-full py-[100px]">
        <InitiativesBanner />
      </div>

      <Wrapper className="relative w-full space-y-10 py-[100px]">
        {initiatives.map((data, index) => {
          const isEvenRow = index % 2 === 0;

          return (
            <div
              key={index}
              className="group flex gap-6 [&:nth-child(2n)]:ml-auto [&:nth-child(2n)]:flex-row-reverse"
            >
              <div className="flex w-[415px] flex-col gap-4">
                <h3 className="font-black">{data.title}</h3>
                <div className="bg-black-800 relative h-[460px] w-full overflow-hidden">
                  <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    priority
                    quality={100}
                    objectFit="cover"
                    className={cn(
                      "origin-center scale-110 transition-all delay-150 duration-700 ease-in-out group-hover:origin-top-right group-hover:scale-125",
                      {
                        "group-hover:origin-top-left": isEvenRow,
                      },
                    )}
                  />
                </div>

                <div className="my-6 flex items-start justify-between gap-4">
                  <p className="line-clamp-2 max-w-[260px] flex-1 text-lg leading-[1.2] font-normal opacity-0 transition-opacity delay-150 duration-500 group-hover:opacity-100">
                    {data.subtitle}
                  </p>
                  <p className="text-lg font-black">
                    {data.yearStart} - {data.yearEnd}
                  </p>
                </div>

                <span className="h-0 w-4 border border-white transition-[width] delay-150 duration-500 ease-in-out group-hover:w-full" />
              </div>

              <p className="mt-[74px] w-[525px] text-base opacity-0 transition-opacity delay-150 duration-500 ease-in-out group-hover:opacity-100">
                {data.description}
              </p>
            </div>
          );
        })}
      </Wrapper>

      <CTA
        imgUrl="/images/initiatives-cta.png"
        className="brightness-[40%] grayscale"
      />
    </div>
  );
}
