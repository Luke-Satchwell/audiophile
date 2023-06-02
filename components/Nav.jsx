"use client";
import { useState } from "react";
import Link from "next/link";
import data from "/utils/data.json";
import Image from "next/image";
import CategoryLinks from "./CategoryLinks";
import Cart from "./Cart";

const getUniqueCategories = () => {
  const categories = data.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
};

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const linkStyles =
    "uppercase font-bold text-[13px] text-white hover:text-theme-orange cursor-pointer tracking-[2px]";

  const uniqueCategories = getUniqueCategories();

  const menuToggle = () => {
    if (!toggleMenu) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  const cartToggle = () => {
    if (!toggleCart) {
      setToggleCart(true);
    } else {
      setToggleCart(false);
    }
  };

  return (
    <nav className="absolute top-8 left-0 right-0 h-[58px]">
      <div className="flex items-center justify-between border-b-[1px] border-white border-opacity-10 pb-8 w-11/12 lg:w-4/5 mx-auto ">
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          width={16}
          height={15}
          alt="hamburger menu icon"
          className="flex lg:hidden md:mr-10"
          onClick={menuToggle}
        />
        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={143}
            height={25}
            alt="brand logo"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          <Link href="/" className={linkStyles}>
            home
          </Link>
          {uniqueCategories.map((category) => (
            <Link
              key={category}
              href={`/category/${category}`}
              className={linkStyles}
            >
              {category}
            </Link>
          ))}
        </ul>

        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          width={23.33}
          height={20}
          alt="shopping cart icon"
          className="md:ml-auto lg:ml-0"
          onClick={cartToggle}
        />
      </div>
      {/* mobile menu */}
      {toggleMenu && (
        <div className="absolute top-[60px] right-0 w-full bg-white py-9 z-20">
          <CategoryLinks handleClick={() => setToggleMenu(false)} />
        </div>
      )}

      {/* cart */}
      {toggleCart && <Cart />}
    </nav>
  );
};
export default Nav;
