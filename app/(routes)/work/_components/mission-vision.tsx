import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";

const MissionVision = () => {
  return (
    <Wrapper className="flex h-full flex-col gap-[114px]">
      <div className="flex w-full max-w-[1064px] justify-between gap-10">
        <div className="flex max-w-[650px] flex-col gap-8">
          <div className="flex w-max flex-col gap-8">
            <h1 className="relative w-max leading-none">Our Vision</h1>
            <span className="h-0 w-full border border-white" />
          </div>
          <h4 className="text-[32px] leading-[40px] font-black">
            Our Vision is to facilitate the birth of the future by bridging the
            gap between idea, and realization.
          </h4>
          <p className="text-xl font-normal">
            We try to transform the way organizations run by advocating correct
            structure and making effective design, branding, and strategy
            important components of any company&apos;s framework.
          </p>
        </div>

        <div className="bg-black-800 relative mt-6 size-[197px] overflow-hidden">
          <Image
            src="/images/our-vision.png"
            alt="vision"
            fill
            priority
            quality={100}
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full max-w-[1064px] flex-row-reverse justify-between gap-10">
        <div className="flex max-w-[650px] flex-col gap-8">
          <div className="flex w-max flex-col gap-8">
            <h1 className="relative w-max leading-none">Our Mission</h1>
            <span className="h-0 w-full border border-white" />
          </div>
          <h4 className="text-[32px] leading-[40px] font-black">
            Our mission is to act as a bridge between products, businesses &
            their objectives.
          </h4>
          <p className="text-xl font-normal">
            We are dedicated to assisting organizations and companies reach
            their objectives through effective design, branding, and strategy.
          </p>
        </div>

        <div className="bg-black-800 relative mt-auto size-[197px] overflow-hidden">
          <Image
            src="/images/our-mission.png"
            alt="mission"
            fill
            priority
            quality={100}
            className="size-full object-cover"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MissionVision;
