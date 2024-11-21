import { memo } from "react";
import { HeroVideoDialog } from "./hero-video-dialog";
import Brand from "./brand";
import { brands } from "@/lib/static";
import MaskDescription from "./mask-description";

const About = () => {
  return (
    <div className="flex flex-col">
      <HeroVideoDialog
        className="block aspect-[1.8] w-full bg-black-900 md:aspect-[2.1]"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/jSYXNWuVhfU"
        thumbnailSrc="/imgs/modal-thumbnail.jpeg"
        thumbnailAlt="GADA Studios"
      />

      <MaskDescription />

      <Brand brands={brands} />
    </div>
  );
};

export default memo(About);
