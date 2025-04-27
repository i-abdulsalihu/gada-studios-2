import React from "react";

import Wrapper from "@/components/shared/wrapper";
import VideoPlayer from "./video-player";
import Services from "./services";

const Brand = () => {
  return (
    <div className="flex flex-col">
      <VideoPlayer />

      <div className="w-full py-28 md:h-dvh">
        <div className="flex size-full items-center">
          <Wrapper className="flex flex-1 flex-col">
            {/**
             * <Paragraph
              value="Understanding your needs, exceeding your expectations"
              className="heading-3 max-w-[975px] pb-8 font-medium tracking-wide lg:leading-[1.2]"
            />
            <Paragraph
              value="Tired of the status quo? We are too. We understand your brand has
              a unique story to tell, partnering with you to uncover that story
              and amplify it. We believe in pushing boundaries and connecting
              you with your audience in meaningful ways."
              className="heading-3 max-w-[975px] pb-8 font-medium tracking-wide lg:leading-[1.2]"
            />
             */}
            <h3 className="max-w-[975px] pb-8 font-medium md:leading-[1.2]">
              Understanding your needs, exceeding your expectations
            </h3>
            <h3 className="max-w-[975px] pb-8 font-medium md:leading-[1.2]">
              Tired of the status quo? We are too. We understand your brand has
              a unique story to tell, partnering with you to uncover that story
              and amplify it. We believe in pushing boundaries and connecting
              you with your audience in meaningful ways.
            </h3>
          </Wrapper>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default Brand;
