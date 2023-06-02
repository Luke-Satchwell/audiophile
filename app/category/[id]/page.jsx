"use client";

import Link from "next/link";
import data from "/utils/data";
import Image from "next/image";
import Header from "@/components/Header";

export async function generateStaticParams() {
  const categories = await fetch("https://.../category").then((res) =>
    res.json()
  );

  return categories.map((category) => ({
    slug: category.slug.toLowerCase(),
  }));
}

const CategoryPage = ({ params }) => {
  return (
    <>
      <Header title={params.id} />

      <section className="flex flex-col gap-[120px] lg:gap-40 mb-40">
        {data
          .filter((product) => product.category === params.id)
          .sort((a, b) => (b.new ? 1 : -1))
          .map((product) => (
            <article
              className="w-11/12 lg:w-4/5 mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-[52px]"
              key={product.id}
            >
              <div>
                {/* conditionally render image based on screen size here!!!! */}
                <Image
                  src={product.categoryImage.mobile}
                  width={327}
                  height={352}
                  alt="product image"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-6">
                {product.new && (
                  <p className="text-theme-orange text-[14px] leading-[19px] uppercase opacity-50 tracking-[10px]">
                    new product
                  </p>
                )}
                <h2 className="font-bold text-[28px] md:text-[40px] leading-[28px] md:leading-[44px] tracking-[1px] md:tracking-[1.42857px]">
                  {product.name}
                </h2>
                <p className="text-center lg:text-left text-[15px] leading-[25px] opacity-50">
                  {product.description}
                </p>
                <Link
                  href={`/category/${params.id}/product-detail/${product.slug}`}
                >
                  <button className="uppercase bg-theme-orange hover:bg-theme-light-orange text-white border-none cursor-pointer h-12 w-40">
                    see product
                  </button>
                </Link>
              </div>
            </article>
          ))}
      </section>
    </>
  );
};

export default CategoryPage;
