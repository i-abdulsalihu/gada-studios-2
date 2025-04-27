import { Metadata } from "next";
import PortfolioBanner from "./_components/banner";
import CTA from "@/components/shared/cta";

import ProjectsSection from "./_components/projects-section";
import Wrapper from "@/components/shared/wrapper";

export const metadata: Metadata = {
  title: "Our Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="relative h-full">
      <div className="relative mt-[100px] w-full py-[100px]">
        <PortfolioBanner />
      </div>

      <Wrapper className="relative w-full space-y-16 py-[100px]">
        <ProjectsSection />
      </Wrapper>

      <CTA
        imgUrl="/images/initiatives-cta.png"
        className="brightness-[40%] grayscale"
      />
    </div>
  );
}
