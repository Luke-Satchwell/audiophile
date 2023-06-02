const About = () => {
  return (
    <section className="my-[120px]">
      <article className="w-11/12 lg:w-4/5 mx-auto flex flex-col items-center lg:flex-row-reverse gap-10 xl:gap-[125px]">
        <div
          id="about"
          className="rounded-lg h-[300px] lg:h-[588px] w-full lg:w-[540px]"
        ></div>
        <div>
          <div className="flex flex-col gap-8 w-[327px] md:w-[573px] lg:w-[445px] mx-auto">
            <h2 className="font-bold text-[28px] md:text-[40px] leading-[38px] md:leading-[44px] tracking-[1px] md:tracking-[1.42857px] uppercase text-black mx-auto text-center lg:text-left">
              bringing you the <span className="text-theme-orange">best</span>{" "}
              audio gear
            </h2>
            <p className="text-center lg:text-left text-[15px] leading-[25px] opacity-50 ">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
export default About;
