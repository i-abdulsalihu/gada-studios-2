import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";

const VisualizationBanner = () => {
  return (
    <div className="relative h-[826px] w-full overflow-hidden rounded-b-4xl py-[100px]">
      <Image
        src="/images/projects/3d-banner.jpg"
        alt="banner"
        quality={100}
        priority
        height={826}
        width={1440}
        className="absolute top-0 left-0 -z-[1] size-full object-cover brightness-50"
      />

      <Wrapper className="h-full">
        <div className="mt-40">
          <h1 className="text-[256px]">Shape the</h1>

          <div className="flex items-end">
            <h1 className="text-primary-500 text-[256px]">Future</h1>
            <p className="ml-auto max-w-[346px] text-lg leading-[28.8px] font-normal">
              Pushing boundaries in architectural design with 3D modeling to
              create remarkable spaces.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default VisualizationBanner;
