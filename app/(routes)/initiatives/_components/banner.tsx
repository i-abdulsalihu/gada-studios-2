"use client";

import Wrapper from "@/components/shared/wrapper";

const InitiativesBanner = () => {
  return (
    <Wrapper className="flex h-full flex-col gap-4">
      <h1>Our Passion in Progress</h1>
      <p className="relative z-[1] max-w-[737px] text-base font-normal md:text-lg">
        Innovating beyond Boundaries
      </p>

      <div className="ml-auto flex max-w-[629px] flex-col gap-10 py-[90px]">
        <p className="relative flex-1 text-lg font-normal md:text-xl lg:text-2xl">
          Creativity doesn&apos;t stop at client work with us. Our initiatives
          showcase our love for pushing past limits, experimenting with new
          ideas, and creating impact-driven projects that inspire. These
          personal ventures fuel our innovation and deepen our commitment to
          transforming industries with meaningful solutions.
        </p>

        <span className="h-0 w-full border border-white" />
      </div>
    </Wrapper>
  );
};

export default InitiativesBanner;
