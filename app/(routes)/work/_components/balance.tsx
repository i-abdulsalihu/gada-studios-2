import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";
import React from "react";

const Balance = () => {
  return (
    <div className="flex flex-col gap-64">
      <div className="flex flex-col gap-[90px]">
        <div className="bg-black-800 relative h-[667px] w-full">
          <Image
            src="/images/Gk5Ay7oXUAAzXhX.png"
            alt="jp"
            priority
            quality={100}
            objectFit="cover"
            fill
          />
        </div>

        <Wrapper className="relative h-[715px]">
          <div className="bg-black-800 relative mx-auto mt-[98px] h-[353px] w-[536px]">
            <Image
              src="/images/mission-1.jpg"
              alt="ONE"
              priority
              quality={100}
              objectFit="cover"
              fill
            />
          </div>
          <div className="bg-black-800 absolute top-[98px] left-[160px] h-[126px] w-[208px]">
            <Image
              src="/images/mission-2.jpg"
              alt="TWO"
              priority
              quality={100}
              objectFit="cover"
              fill
            />
          </div>
          <div className="bg-black-800 absolute bottom-0 left-10 size-[224px]">
            <Image
              src="/images/mission-3.jpg"
              alt="THREE"
              priority
              quality={100}
              objectFit="cover"
              fill
            />
          </div>
          <div className="bg-black-800 absolute right-10 bottom-[98px] h-[126px] w-[224px]">
            <Image
              src="/images/mission-4.jpg"
              alt="FOUR"
              priority
              quality={100}
              objectFit="cover"
              fill
            />
          </div>
        </Wrapper>
      </div>

      <Wrapper className="flex gap-10">
        <div className="flex flex-1 flex-col gap-12">
          <p className="text-2xl leading-[38px] font-normal">
            Balance, Responsibility, Innovation, Daring, Growth and Efficiency:
            as a team across Nigeria and beyond, we are committed to providing
            balanced solutions, accepting responsibility for our actions,
            encouraging innovation, daring to push the envelope, fostering
            growth and promoting efficiency in all parts of work.
          </p>
          <p className="text-2xl leading-[38px] font-normal">
            Our aims include developing a strong market presence, positively
            impacting businesses, reinventing business operations, integrating
            design, branding, and strategy into corporate structures, and
            embodying our core values in everything we do
          </p>
        </div>

        <div className="bg-black-800 relative flex-1">
          <Image
            src="/images/balance.png"
            alt="balance"
            className="size-full scale-x-[-1] transform object-cover"
            fill
            priority
            quality={100}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Balance;
