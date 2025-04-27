import HomeBanner from "./_components/banner";
import Brand from "./_components/brand";
import Lifestyle from "./_components/lifestyle";
import Possibilities from "./_components/possibilities";
import SVGScroll from "./_components/svg-scroll";

export default function Home() {
  return (
    <div className="h-full">
      <HomeBanner />
      <Brand />
      <Possibilities />
      <SVGScroll />
      <Lifestyle />
    </div>
  );
}
