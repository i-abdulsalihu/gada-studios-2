"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { FC, useRef } from "react";

import Offer from "./offer";
import { cn } from "@/lib/utils";
import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";

export const possibilities = [
  {
    title: "Cutting Edge Solutions",
    description:
      "We stay ahead of the curve, ensuring we deliver effectively. Let us leverage our knowledge to give you a competitive edge.",
    imgUrl: "/images/cutting-edge-solutions.jpeg",
    start: -200,
    end: 20,
  },
  {
    title: "Amplifying your voice",
    description:
      "We're not just developers and marketers; We'll ensure your message reaches your target audience through the most impactful channels.",
    imgUrl: "/images/amplifying-your-voice.jpeg",
    start: 0,
    end: -700,
  },
  {
    title: "Fresh Perspectives",
    description:
      "Bringing a wealth of experience from various industries to the table. We're creative problem solvers, we see your project from unique angles, setting you ahead of competition.",
    imgUrl: "/images/fresh-perspectives.jpeg",
    start: -200,
    end: -700,
  },
  {
    title: "Empowering your vision",
    description:
      "We become an extension of your team and not just execute projects. We take the time to understand your goals and aspirations. Together, let's create something truly remarkable.",
    imgUrl: "/images/empowering-your-vision.jpeg",
    start: -900,
    end: -900,
  },
];

const Possibilities = () => {
  return (
    <div className="relative flex flex-col">
      <div className="absolute top-0 left-1/2 -z-10 hidden h-full w-px -translate-x-1/2 bg-white/50 sm:flex" />

      <Wrapper className="relative">
        <div className="-z-10 h-px w-full bg-white/50" />

        <div className="h-max w-full py-7 md:py-14">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-normal md:text-4xl">
              Imagine the Possibilities
            </h3>
          </div>

          <div className="hidden md:block md:pt-[150px] lg:pt-[300px]">
            {possibilities.map((possibility, index) => (
              <ParallaxCard
                key={index}
                className="my-16 ml-10 flex [&:nth-child(2n)]:mr-10 [&:nth-child(2n)]:ml-0 [&:nth-child(2n)]:justify-end"
                possibility={possibility}
              />
            ))}
          </div>
        </div>
      </Wrapper>

      <Offer />

      <div className="h-screen" />
    </div>
  );
};

export default Possibilities;

interface ParallaxCardProps {
  className?: string;
  possibility: {
    title: string;
    description: string;
    imgUrl: string;
    start: number;
    end: number;
  };
}

const ParallaxCard: FC<ParallaxCardProps> = ({
  className,
  possibility: { title, description, start, end, imgUrl },
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px)`;

  return (
    <motion.div
      ref={ref}
      style={{ transform, opacity }}
      className={cn("relative origin-top", className)}
    >
      <div className="space-y-6">
        <Image src={imgUrl} alt={title} width={450} height={300} />

        <div className="flex flex-col gap-4">
          <h3 className="text-4xl font-black">{title}</h3>
          <p className="w-full text-lg font-normal sm:max-w-[380px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// import Image from "next/image";

// import Wrapper from "@/components/shared/wrapper";
// import Offer from "./offer";
// import {
//   useMotionTemplate,
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { FC, Fragment, useRef } from "react";

// const Possibilities = () => {
//   return (
// <div className="relative flex flex-col">
//   <div className="absolute top-0 left-1/2 -z-10 hidden h-full w-px -translate-x-1/2 bg-white/50 sm:flex" />

//   <Wrapper className="relative">
//     <div className="-z-10 h-px w-full bg-white/50" />

//     <div className="w-full py-7 sm:h-[100vh] md:py-14 lg:h-[200vh]">
//       <div className="md:w-1/2">
//         <h3 className="text-2xl font-normal md:text-4xl">
//           Imagine the Possibilities
//         </h3>
//       </div>

//       <div className="hidden md:block md:pt-[150px] lg:pt-[300px]">
//         <ParallaxImg
//           src="/images/cutting-edge-solutions.jpeg"
//           alt="And example of a space launch"
//           start={-200}
//           end={200}
//           className="ml-10 w-1/3"
//         />
//         <ParallaxImg
//           src="/images/amplifying-your-voice.jpeg"
//           alt="And example of a space launch"
//           start={0}
//           end={-200}
//           className="ml-auto w-1/3"
//         />
//         <ParallaxImg
//           src="/images/empowering-your-vision.jpeg"
//           alt="And example of a space launch"
//           start={-200}
//           end={100}
//           className="ml-32 w-1/4"
//         />
//         <ParallaxImg
//           src="/images/video-thumbnail.jpeg"
//           alt="And example of a space launch"
//           start={50}
//           end={-100}
//           className="mr-20 ml-auto w-1/4"
//         />
//       </div>
//     </div>

//     <div className="h-[200vh] w-full py-14">
//       {possibilities.map((pby, index) => (
//         <div
//           key={index}
//           className="group my-16 flex [&:nth-child(2n)]:justify-end"
//         >
//           <div className="group flex sm:w-[305px]">
//             <div className="flex h-full flex-1 flex-col gap-6">
//               <div className="flex w-full flex-col gap-4">
//                 <h3 className="text-4xl font-black">{pby.title}</h3>
//                 <p className="w-full text-lg font-normal sm:max-w-[330px]">
//                   {pby.description}
//                 </p>
//               </div>

//               <Image
//                 src={pby.img}
//                 alt={pby.title}
//                 width={244}
//                 height={244}
//                 quality={100}
//                 priority
//                 className="mx-auto size-[244px] origin-top-left scale-0 rounded-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-100"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     <div className="h-[calc(100vh-20vh)] w-full py-14"></div>
//   </Wrapper>

//   <Offer />

//   <div className="h-screen" />
// </div>
//   );
// };

// export default Possibilities;

// const ParallaxImg = ({
//   className,
//   alt,
//   src,
//   start,
//   end,
// }: {
//   className?: string;
//   alt: string;
//   src: string;
//   start: number;
//   end: number;
// }) => {
// const ref = useRef(null);

// const { scrollYProgress } = useScroll({
//   target: ref,
//   offset: [`${start}px end`, `end ${end * -1}px`],
// });

// const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
// const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

// const y = useTransform(scrollYProgress, [0, 1], [start, end]);
// const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

//   return (
// <motion.img
//   src={src}
//   alt={alt}
//   className={className}
//   ref={ref}
//   style={{ transform, opacity }}
// />
//   );
// };
