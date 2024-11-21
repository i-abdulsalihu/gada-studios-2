import Banner from "./_components/banner";
import About from "./_components/about";
import Possibilities from "./_components/possibilities";
import Lifestyle from "./_components/lifestyle";

export default function Home() {
  return (
    <div className="h-full">
      <Banner />
      <About />
      <Possibilities />
      <Lifestyle />
    </div>
  );
}
