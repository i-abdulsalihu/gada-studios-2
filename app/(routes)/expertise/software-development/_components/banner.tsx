import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";

const SoftwareDevelopmentBanner = () => {
  return (
    <Wrapper className="relative flex h-full flex-col gap-6">
      <div className="flex items-center gap-7">
        <h1 className="text-[140px]">Crafting</h1>
        <div className="bg-black-800 relative h-[136px] w-[236px] overflow-hidden brightness-50">
          <Image
            src="/images/projects/3d-banner.jpg"
            alt="offer"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>
        <svg
          width="110"
          height="95"
          viewBox="0 0 110 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.792 94.224C19.32 94.224 15.888 93.6 13.392 92.352C8.4 89.752 6.528 85.384 6.528 80.392C6.528 76.232 8.4 72.904 10.792 70.096C12.976 67.288 14.952 65 14.952 63.024C14.952 59.696 13.392 58.24 8.608 58.24H0.288V36.816H7.568C12.352 36.816 13.912 35.36 13.912 32.032C13.912 30.056 12.248 27.872 10.272 25.064C8.192 22.256 6.528 18.824 6.528 14.664C6.528 12.168 7.152 9.88 8.088 7.8C10.168 3.64 15.056 0.831995 23.792 0.831995H44.072V19.24H38.352C34.608 19.24 31.696 19.864 31.696 23.088C31.696 24.752 33.36 26.416 35.336 28.496C37.312 30.68 38.976 33.176 38.976 36.192C38.976 37.856 38.56 39.416 37.728 40.976C36.064 43.992 32.112 46.072 24.416 46.072V48.984C28.368 48.984 31.176 49.504 33.256 50.44C37.624 52.208 38.976 55.328 38.976 58.864C38.976 60.944 38.456 62.712 37.312 64.272C35.128 67.496 32.424 69.784 32.424 71.968C32.424 75.192 34.92 75.816 38.664 75.816H44.072V94.224H23.792ZM65.3205 75.816H70.7285C74.4725 75.816 76.9685 75.192 76.9685 71.968C76.9685 70.824 76.4485 69.784 75.3045 68.536C73.1205 66.04 70.4165 62.92 70.4165 58.864C70.4165 57.2 70.8325 55.64 71.6645 54.08C73.3285 51.064 77.2805 48.984 84.9765 48.984V46.072C81.2325 46.072 78.2165 45.552 76.1365 44.616C71.7685 42.848 70.4165 39.52 70.4165 36.192C70.4165 33.176 72.0805 30.68 74.0565 28.496C76.0325 26.416 77.6965 24.752 77.6965 23.088C77.6965 19.864 74.7845 19.24 71.0405 19.24H65.3205V0.831995H85.6005C90.0725 0.831995 93.5045 1.45599 96.0005 2.704C100.993 5.30399 102.865 9.672 102.865 14.664C102.865 18.824 101.201 22.256 99.2245 25.064C97.1445 27.872 95.4805 30.056 95.4805 32.032C95.4805 35.36 97.0405 36.816 101.825 36.816H109.105V58.24H100.785C96.0005 58.24 94.4405 59.696 94.4405 63.024C94.4405 65 96.3125 67.288 98.7045 70.096C100.889 72.904 102.865 76.232 102.865 80.392C102.865 82.888 102.241 85.176 101.305 87.256C99.2245 91.416 94.5445 94.224 85.6005 94.224H65.3205V75.816Z"
            className="fill-primary-500"
          />
        </svg>
      </div>
      <div className="flex items-center gap-7">
        <h1 className="text-[140px]">Seamless</h1>
        <svg
          width="98"
          height="98"
          viewBox="0 0 98 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.1091 64.1081L75.5416 91.6702L60.4338 98L49 70.4369L37.5662 98L22.4584 91.6702L33.8922 64.1081L6.32861 75.5418L0 60.4328L27.5623 48.9997L0 37.5666L6.32861 22.4582L33.8922 33.8913L22.4584 6.32921L37.5662 0L49 27.5621L60.4338 0L75.5416 6.32921L64.1091 33.8913L91.6714 22.4582L98 37.5666L70.4377 48.9997L98 60.4328L91.6714 75.5418L64.1091 64.1081Z"
            className="fill-primary-500"
          />
        </svg>
        <h1 className="text-[140px]">Digital</h1>
      </div>
      <div className="flex items-center gap-8">
        <h1 className="text-[140px]">Solutions</h1>
        <p className="text-black-300 max-w-[444px] text-lg font-normal">
          We design and build innovative, scalable, and user friendly software
          tailored to meet your unique business needs. From design to frontend
          finesse, we&apos;re here to turn your ideas into reality.
        </p>
      </div>
    </Wrapper>
  );
};

export default SoftwareDevelopmentBanner;
