import Link from "next/link";
import data from "/utils/data.json";
import Image from "next/image";

const getUniqueCategories = () => {
  const categories = data.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories;
};
const Footer = () => {
  const date = new Date();
  const copyright = `Copyright ${date.getFullYear()}. All rights Reserved`;
  const uniqueCategories = getUniqueCategories();
  const linkStyles =
    "uppercase font-bold text-[13px] text-white hover:text-theme-orange cursor-pointer tracking-[2px]";

  return (
    <footer className="bg-theme-off-black px-6 pt-[52px] pb-[38px] flex flex-col items-center justify-center gap-10 relative">
      <div className="h-[4px] w-[101px] bg-theme-orange absolute top-0 left-2/4 md:left-[39px] lg:left-[10%] translate-x-[-50%] md:translate-x-0" />
      <Link href="/">
        <Image
          src="/assets/shared/desktop/logo.svg"
          width={143}
          height={25}
          alt="brand logo"
        />
      </Link>

      <ul className="flex flex-col md:flex-row items-center gap-10">
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
      <p className="text-white text-[15px] leading-[25px] opacity-50 font-medium text-center w-11/12 lg:w-4/5 mx-auto">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="text-white text-[15px] leading-[25px] opacity-50 font-medium text-center">
        {copyright}
      </p>

      <div className="flex items-center gap-4">
        <Link href="https://www.facebook.com">
          <Image
            src="/assets/shared/desktop/icon-facebook.svg"
            width={24}
            height={24}
            alt="social media logo"
          />
        </Link>
        <Link href="https://www.twitter.com">
          <Image
            src="/assets/shared/desktop/icon-twitter.svg"
            width={24}
            height={24}
            alt="social media logo"
          />
        </Link>
        <Link href="https://www.instagram.com">
          <Image
            src="/assets/shared/desktop/icon-instagram.svg"
            width={24}
            height={24}
            alt="social media logo"
          />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
