import Wrapper from "@/components/shared/wrapper";

const BrandingBanner = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="bg-black-800 grid h-[226px] w-full grid-cols-4 overflow-hidden sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-9">
        {Array.from({ length: 18 }).map((_, _key) => (
          <div
            key={_key}
            className="border-black-950 h-[113px] w-full border"
          />
        ))}
      </div>
      <Wrapper className="flex flex-col gap-4">
        <div className="flex flex-col gap-12">
          <h1 className="max-w-[1016px] leading-28">
            Unleash your Potential Own your Story
          </h1>

          <div className="h-px w-full bg-white" />
        </div>

        <div className="ml-auto">
          <p className="max-w-[582px] flex-1 text-lg font-normal">
            Your brand is more than just a mix of lines and colors, it&apos;s a
            part of who you are. Let&apos;s express it for you.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default BrandingBanner;
