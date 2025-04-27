import { memo } from "react";

import { cn } from "@/lib/utils";
import Wrapper from "@/components/shared/wrapper";

const offers = [
  {
    title: "We Listen",
    description:
      "We take the time to understand your unique brand voice, target audience, and  business goals.",
    style: "bg-primary-950",
  },
  {
    title: "We're Creative",
    description:
      "We develop innovative and engaging content that cuts through the clutter.",
    style: "bg-primary-900",
  },
  {
    title: "We're data-driven",
    description:
      "We track and analyze results to ensure your marketing strategy is constantly  evolving and optimizing for growth.",
    style: "bg-primary-800",
  },
];

const Services = () => {
  return offers.map((offer, index) => (
    <div
      key={index}
      className={cn("bg-primary-950 sticky top-0 rounded-2xl", offer.style)}
    >
      <Wrapper className="py-[100px]">
        <div className="flex items-center justify-between gap-10">
          <div>
            <p className="text-primary-200 mb-4 text-lg font-normal md:mb-6 md:text-xl lg:text-2xl">
              What we Offer
            </p>
            <h1>{offer.title}</h1>
            <p className="mt-11 w-full max-w-[451px] text-lg font-normal md:mt-32">
              {offer.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {offers.map((_, i) => (
              <div
                key={i}
                className={cn("h-[72px] w-6 rounded-2xl bg-white/20", {
                  "bg-white": i <= index,
                })}
              ></div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  ));
};

export default memo(Services);
