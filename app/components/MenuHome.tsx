import { BitterRose, ChillaxMedium } from "../utils/fonts";

import { JSX } from "react";
import Link from "next/link";

interface MenuItemProps {
  href: string;
  background: string;
  title: string;
  subtitle: string;
}

const MenuItem = ({ href, background, title, subtitle }: MenuItemProps) => (
  <Link
    href={href}
    className="relative w-full h-full flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105"
    style={{
      background: `url("${background}")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    }}
  >
    <div
      className="w-full text-center p-10"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <h1
        className={`text-4xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
      >
        {title} <br />
        <span
          className={`text-5xl sm:text-7xl text-white ${ChillaxMedium.className}`}
        >
          {subtitle}
        </span>
      </h1>
    </div>
  </Link>
);

export default async function MenuHome(): Promise<JSX.Element> {
  const menuItems = [
    {
      href: "/menu/drinks",
      background: "/menu-1.png",
      title: "Drinks",
      subtitle: "Refreshing",
    },
    {
      href: "/menu/wine",
      background: "/menu-2.png",
      title: "Wine",
      subtitle: "Fine",
    },
    {
      href: "/menu/food",
      background: "/menu-3.png",
      title: "Food",
      subtitle: "Delectable",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-1 md:grid-cols-3">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          href={item.href}
          background={item.background}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </section>
  );
}
