import { FC } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import { cn } from "@/lib/utils";
import Wrapper from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";

interface CTAProps {
  imgUrl?: string;
  className?: string;
}

const CTA: FC<CTAProps> = ({
  className,
  imgUrl = "/images/expertise-cta.jpeg",
}) => {
  return (
    <div className="relative mt-[100px] flex h-[559px] items-center 2xl:h-[669px]">
      <div
        className={cn(
          "absolute top-0 left-0 -z-[1] size-full brightness-[25%]",
          className,
        )}
      >
        <Image
          src={imgUrl}
          alt="CTA"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>
      <Wrapper className="py-48">
        <div className="z-10 flex w-full max-w-[604px] flex-col gap-2">
          <p className="text-4xl leading-11 font-medium text-white">
            Let&apos;s Chat About Your Brand and Marketing Goals
          </p>
          <Button size="lg" className="w-max px-6">
            <span className="font-normal">Contact Us Today</span>
            <FiArrowRight className="ml-2 !size-5" />
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default CTA;
