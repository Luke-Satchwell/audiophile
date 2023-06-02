"use client";
import Link from "next/link";
import data from "/utils/data.json";
import Image from "next/image";

const getUniqueCategories = () => {
  const categories = data.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
};

const CategoryLinks = ({ handleClick }) => {
  const uniqueCategories = getUniqueCategories();
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {uniqueCategories.map((category) => (
        <div
          key={category}
          className="flex flex-col items-center bg-theme-light-grey rounded-lg relative h-[165px] my-4"
        >
          <Image
            src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
            width={120}
            height={150}
            alt="category thumbnail"
            className=" -mt-[35px]"
          />
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-bold uppercase text-[15px] leading-[20px] tracking-[1.07143px]">
              {category}
            </h3>
            <Link key={category} href={`/category/${category}`}>
              <button
                onClick={handleClick}
                className="flex items-center justify-center gap-3 text-[13px] leading-[18px] opacity-50 uppercase"
              >
                shop
                <Image
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  width={5}
                  height={10}
                  alt="right facing arrow"
                />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
export default CategoryLinks;
