import Link from "next/link";
import Nav from "./Nav";
const Hero = () => {
  return (
    <header id="hero" className="h-[600px] md:h-[729px] mb-[120px] relative">
      <Nav />
      <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4 relative top-2/4 translate-y-[-50%] lg:left-[10%] lg:w-[379px]">
        <p className=" text-white text-[14px] leading-[19px] uppercase opacity-50 tracking-[10px] ">
          new product
        </p>

        <h1 className="text-white font-bold text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] tracking-[1.28571px] uppercase w-[328px] md:w-[396px] pb-2">
          XX99 Mark II HeadphoneS
        </h1>
        <p className="text-white text-[15px] leading-[25px] opacity-75 w-[328px] md:w-[349px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href="/category/headphones/product-detail/xx99-mark-two-headphones">
          <button className="uppercase bg-theme-orange hover:bg-theme-light-orange text-white border-none cursor-pointer h-12 w-40">
            see product
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Hero;
