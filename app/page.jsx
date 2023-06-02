import Hero from "@/components/Hero";
import CategoryLinks from "@/components/CategoryLinks";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CategoryLinks />
      <section className="flex flex-col gap-6 mb-[120px] md:mb-[96px] lg:mb-[200px]">
        <article className="h-[600px] md:h-[720px] lg:h-[560px] w-11/12 lg:w-4/5 mx-auto rounded-lg mt-[120px] md:mt-[96px] lg:mt-168px bg-theme-orange overflow-hidden relative">
          <div className="bg-pattern absolute top-[-121px] left-[-116px] md:left-[-120px] lg:top-[-50px] lg:left-[-180px] md:top-[-300px] z-0" />
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            width={173}
            height={207}
            alt="product image"
            className="absolute left-2/4 lg:left-[118px] lg:-translate-x-0 -translate-x-[50%] top-[55px] lg:top-[96px] z-10"
          />
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left w-11/12 mx-auto relative top-2/4 lg:translate-y-[-50%] lg:left-[50%]">
            <h2 className="text-white font-bold text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] tracking-[1.28571px] uppercase w-[280px]">
              ZX9 <br /> SPEAKER
            </h2>
            <p className="w-[349px] text-white text-[15px] leading-[25px] opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href="/category/speakers/product-detail/zx9-speaker">
              <button className="uppercase bg-black text-white hover:bg-theme-light-grey cursor-pointer w-40 h-12 text-[13px] leading-[18px] tracking-[1px] font-bold">
                see product
              </button>
            </Link>
          </div>
        </article>

        <article
          id="zx7"
          className="h-[320px] w-11/12 lg:w-4/5 mx-auto rounded-lg relative"
        >
          <div className="py-[101px] pl-6 md:pl-[62px] lg:pl-[95px] flex flex-col gap-8">
            <h2 className="uppercase font-bold tracking-[2px] text-[28px] leading-[38px] text-black">
              zx7 speaker
            </h2>
            <Link href="/category/speakers/product-detail/zx7-speaker">
              <button className="border-[1px] border-solid border-black bg-transparent hover:bg-black text-black hover:text-white cursor-pointer h-12 w-40 uppercase font-bold">
                see product
              </button>
            </Link>
          </div>
        </article>
        <article className="flex flex-col md:flex-row gap-6 md:gap-3 lg:gap-8 w-11/12 lg:w-4/5 mx-auto rounded-lg">
          <div
            id="yx1"
            className="h-[200px] md:h-[320px] rounded-lg md:w-2/4"
          ></div>
          <div className="flex flex-col gap-8 bg-theme-light-grey py-10 md:py-[101px] pl-6 md:pl-10 lg:pl-[95px] rounded-lg md:w-2/4">
            <h2 className="uppercase font-bold tracking-[2px] text-[28px] leading-[38px] text-black">
              yx1 earphones
            </h2>
            <Link href="/category/earphones/product-detail/yx1-earphones">
              <button className="border-[1px] border-solid border-black bg-transparent hover:bg-black text-black hover:text-white cursor-pointer h-12 w-40 uppercase font-bold">
                see product
              </button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
