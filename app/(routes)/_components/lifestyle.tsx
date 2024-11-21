"use client";

import MaxWrapper from "@/components/shared/max-wrapper";
import { flickerEffects, viewEffects } from "@/lib/variants";
import { motion, useInView } from "framer-motion";
import React, { memo, useRef } from "react";

const Lifestyle = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1, viewEffects);
  const isInView2 = useInView(ref2, viewEffects);
  const isInView3 = useInView(ref3, viewEffects);
  const isInView4 = useInView(ref4, viewEffects);

  return (
    <div className="flex flex-col">
      <MaxWrapper>
        <div className="flex h-screen flex-col items-center justify-center">
          <motion.h1
            ref={ref1}
            className="w-full max-w-[1280px] text-center font-neskt text-[122px] font-bold leading-[155px] transition-all duration-500"
          >
            <motion.span
              animate={
                isInView1
                  ? { opacity: flickerEffects[0].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView1
                  ? {
                      duration: flickerEffects[0].duration,
                      ease: "easeInOut",
                      times: flickerEffects[0].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-center"
            >
              Ready to take your Brand to the next level?
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <motion.h1
            ref={ref2}
            className="flex w-full max-w-[1280px] flex-col font-neskt text-[122px] font-bold leading-[155px] transition-all duration-500"
          >
            <motion.span
              animate={
                isInView2
                  ? { opacity: flickerEffects[1].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView2
                  ? {
                      duration: flickerEffects[1].duration,
                      ease: "easeInOut",
                      times: flickerEffects[1].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-left"
            >
              It&apos;s more than
            </motion.span>
            <motion.span
              animate={
                isInView2
                  ? { opacity: flickerEffects[2].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView2
                  ? {
                      duration: flickerEffects[2].duration,
                      ease: "easeInOut",
                      times: flickerEffects[2].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-right"
            >
              Just Business
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <motion.h1
            ref={ref3}
            className="w-full max-w-[1280px] text-center font-neskt text-[122px] font-bold leading-[155px] transition-all duration-500"
          >
            <motion.span
              animate={
                isInView3
                  ? { opacity: flickerEffects[3].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView3
                  ? {
                      duration: flickerEffects[3].duration,
                      ease: "easeInOut",
                      times: flickerEffects[3].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-center"
            >
              It&apos;s a lifestyle
            </motion.span>
          </motion.h1>
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <motion.h1
            ref={ref4}
            className="w-full max-w-[1280px] text-center font-neskt text-[122px] font-bold leading-[155px] transition-all duration-500"
          >
            <motion.span
              animate={
                isInView4
                  ? { opacity: flickerEffects[0].opacity }
                  : { opacity: 0 }
              }
              transition={
                isInView4
                  ? {
                      duration: flickerEffects[0].duration,
                      ease: "easeInOut",
                      times: flickerEffects[0].times,
                    }
                  : { duration: 0.5 }
              }
              className="text-center"
            >
              Let&apos;s get Started!
            </motion.span>
          </motion.h1>
        </div>
      </MaxWrapper>
    </div>
  );
};

export default memo(Lifestyle);

// "use client";

// import MaxWrapper from "@/components/shared/max-wrapper";
// import { motion, useInView } from "framer-motion";
// import React, { memo, useRef } from "react";

// const flickerEffects = [
//   {
//     opacity: [0, 1, 0.3, 0.7, 1],
//     times: [0, 0.2, 0.4, 0.7, 1],
//     duration: 1.8,
//   },
//   {
//     opacity: [0, 0.5, 1, 0.6, 1],
//     times: [0, 0.1, 0.5, 0.8, 1],
//     duration: 2.0,
//   },
//   { opacity: [0, 1, 0.4, 1], times: [0, 0.3, 0.6, 1], duration: 1.6 },
//   {
//     opacity: [0, 0.7, 1, 0.5, 1],
//     times: [0, 0.25, 0.5, 0.75, 1],
//     duration: 1.9,
//   },
// ];

// const Lifestyle = () => {
//   const headings = [
//     ["Ready to take your Brand to the next level?"],
//     ["It's more than", "Just Business"],
//     ["It's a lifestyle"],
//     ["Let's get Started!"],
//   ];

//   const refs = useRef(
//     headings.map(() => React.createRef<HTMLHeadingElement>()),
//   );

//   const inViewStates = refs.current.map((ref) =>
//     useInView(ref, {
//       once: true,
//       margin: "200px 0px -30% 0px",
//     }),
//   );

//   return (
//     <div className="flex flex-col">
//       <MaxWrapper>
//         {headings.map((spans, index) => {
//           const isInView = inViewStates[index];

//           return (
//             <div
//               key={index}
//               className="flex h-screen flex-col items-center justify-center"
//             >
//               <motion.h1
//                 ref={refs.current[index]}
//                 className="flex w-full max-w-[1280px] flex-col !font-neskt text-[122px] font-bold leading-[155px] transition-all duration-500"
//               >
//                 {spans.map((span, spanIndex) => {
//                   const flicker =
//                     flickerEffects[(index + spanIndex) % flickerEffects.length]; // Assign a unique flicker effect to each span

//                   return (
//                     <motion.span
//                       key={spanIndex}
//                       animate={
//                         isInView ? { opacity: flicker.opacity } : { opacity: 0 }
//                       }
//                       transition={
//                         isInView
//                           ? {
//                               duration: flicker.duration,
//                               ease: "easeInOut",
//                               times: flicker.times,
//                             }
//                           : { duration: 0.5 }
//                       }
//                       className={`block ${
//                         spans.length > 1
//                           ? spanIndex === 0
//                             ? "text-left"
//                             : "text-right"
//                           : "text-center"
//                       }`}
//                     >
//                       {span}
//                     </motion.span>
//                   );
//                 })}
//               </motion.h1>
//             </div>
//           );
//         })}
//       </MaxWrapper>
//     </div>
//   );
// };

// export default memo(Lifestyle);
