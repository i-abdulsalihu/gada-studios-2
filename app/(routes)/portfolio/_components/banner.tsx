import Wrapper from "@/components/shared/wrapper";

const PortfolioBanner = () => {
  return (
    <Wrapper className="flex h-full flex-col gap-4">
      <h1 className="max-w-[943px]">
        Building Brands that inspire and Innovate
      </h1>
      <p className="relative z-[1] max-w-[737px] text-base font-normal md:text-lg">
        Creativity Meets Strategy
      </p>

      <div className="ml-auto flex max-w-[629px] flex-col gap-10 py-[90px]">
        <p className="relative flex-1 text-lg font-normal md:text-xl lg:text-2xl">
          At Gada, we blend creativity with expertise to bring your ideas to
          life. From branding and design to 3D visualization, marketing, product
          development, and more, we develop solutions that speak to your
          audience and elevate your brand&apos;s presence. Our approach is
          rooted in innovation, collaboration, and understanding your goals,
          ensuring that every project we touch becomes a masterpiece.
        </p>

        <span className="h-0 w-full border border-white" />
      </div>
    </Wrapper>
  );
};

export default PortfolioBanner;
