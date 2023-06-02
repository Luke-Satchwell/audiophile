"use client";
import Nav from "@/components/Nav";
import data from "/utils/data";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const item = await fetch("https://.../product-detail").then((res) =>
    res.json()
  );

  return item.map((product) => ({
    slug: product.slug,
  }));
}

const ProductDetailPage = ({ params }) => {
  const quantityStyles =
    "font-bold text-[13px] leading-[18px] tracking-[1px] uppercase";

  return (
    <>
      <div className="bg-theme-off-black h-[90px] mb-8">
        <Nav />
      </div>
      <section>
        {data.map((product) => {
          if (product.slug === params.slug) {
            // format product features with line breaks
            const features = product.features;
            function renderTextWithLineBreaks() {
              return features.split("\n").map((line, index) => (
                <p
                  key={index}
                  className="font-medium text-black opacity-50 text-[15px] leading-[25px] lg:w-[550px] xl:w-[635px]"
                >
                  {line}
                </p>
              ));
            }
            const formattedFeatures = renderTextWithLineBreaks();

            const sectionTitle =
              "font-bold uppercase text-[24px] leading-[36px] tracking-[0.857143px] ";

            return (
              <div key={product.id}>
                <section className="flex flex-col gap-6 w-11/12 lg:w-4/5 mx-auto mb-[88px]">
                  <Link
                    href={`/category/${product.category}`}
                    className=" font-medium opacity-50 text-[15px] leading-[25px] capitalize"
                  >
                    go back
                  </Link>
                  <div className="flex flex-col md:items-center md:flex-row gap-10 md:gap-[69px]">
                    <div>
                      <Image
                        src={product.image.mobile}
                        width={327}
                        height={327}
                        alt="product image"
                        className="rounded-lg w-full md:h-[480px] lg:w-[540px] lg:h-[560px]"
                      />
                    </div>
                    <div className="flex flex-col gap-6 md:w-[340px]">
                      {product.new === true && (
                        <p className="text-theme-orange text-[14px] leading-[19px] uppercase opacity-50 tracking-[10px]">
                          new product
                        </p>
                      )}
                      <h1 className="font-bold text-[28px] leading-[38px] tracking-[1px]">
                        {product.name}
                      </h1>
                      <p className="opacity-50">{product.description}</p>
                      <p className="font-bold text-[18px] leading-[25px] tracking-[1.28571px] uppercase">
                        $ {product.price}
                      </p>
                      {/* update to enable quantity input and update cart below */}
                      <div className="flex items-center gap-5">
                        <div className="bg-theme-light-grey h-12 w-[120px] flex items-center justify-between px-5">
                          <button
                            className={`${quantityStyles} cursor-pointer hover:text-theme-orange`}
                            // onClick={decrementQuantity}
                          >
                            -
                          </button>
                          <p className={quantityStyles}>0</p>
                          <button
                            className={`${quantityStyles} cursor-pointer hover:text-theme-orange`}
                            // onClick={incrementQuantity}
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="uppercase bg-theme-orange hover:bg-theme-light-orange text-white border-none cursor-pointer h-12 w-40"
                          // onClick={addToBasket}
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="flex flex-col lg:flex-row lg:gap-[50px] xl:gap-[125px] w-11/12 lg:w-4/5 mx-auto">
                  <section className="flex flex-col gap-6 mb-[88px] w-11/12 mx-auto lg:w-[635px]">
                    <h2 className={`${sectionTitle}`}>features</h2>
                    {formattedFeatures}
                  </section>

                  <section className="flex flex-col md:flex-row lg:flex-col w-11/12 lg:w-4/5 mx-auto  gap-6 mb-[120px]">
                    <div>
                      <h2 className={`${sectionTitle} md:w-[350px]`}>
                        in the box
                      </h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      {product.includes.map((item) => (
                        <div
                          key={item.item}
                          className="flex items-center gap-6 text-[15px] leading-[25px]"
                        >
                          <p className="font-bold text-theme-orange ">
                            {item.quantity}x
                          </p>
                          <p className="font-medium opacity-50">{item.item}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <section className="flex flex-col gap-6 max-w-11/12 lg:max-w-4/5 mx-auto mb-[120px]">
                  <div className="flex flex-col md:flex-row gap-5 items-center justify-center mx-auto ">
                    <div className="flex flex-col items-center justify-center mx-auto gap-5  md:gap-5 xl:gap-8">
                      <div className="w-[327px] md:w-[277pz] h-[174px] xl:w-[445px] xl:h-[280px]">
                        <Image
                          src={product.gallery.first.desktop}
                          width={327}
                          height={120}
                          alt="product gallery image"
                          className="rounded-lg w-full h-full"
                        />
                      </div>
                      <div className="w-[327px] md:w-[277pz] h-[174px] xl:w-[445px] xl:h-[280px]">
                        <Image
                          src={product.gallery.second.desktop}
                          width={327}
                          height={174}
                          alt="product gallery image"
                          className="rounded-lg h-full w-full"
                        />
                      </div>
                    </div>
                    <div className="w-[327px] md:w-[395px] xl:w-[635px] h-[368px] xl:h-[592px]">
                      <Image
                        src={product.gallery.third.desktop}
                        width={327}
                        height={368}
                        alt="product gallery image"
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </section>

                <section className="flex flex-col gap-6 w-11/12 lg:w-4/5 mx-auto mb-[120px] text-center">
                  <h2 className={`${sectionTitle} mb-10`}>you may also like</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                    {product.others.map((item) => (
                      <div
                        key={item.slug}
                        className="flex flex-col items-center gap-6"
                      >
                        <Image
                          src={item.image.mobile}
                          width={327}
                          height={318}
                          alt="product-image"
                          className="rounded-lg"
                        />
                        <div className="flex flex-col items-center gap-8">
                          <h2 className={`${sectionTitle} leading-[33px]`}>
                            {item.name}
                          </h2>
                          <Link
                            href={`/category/${item.category}/product-detail/${item.slug}`}
                          >
                            <button className="uppercase bg-theme-orange hover:bg-theme-light-orange text-white border-none cursor-pointer h-12 w-40">
                              see product
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};
export default ProductDetailPage;
