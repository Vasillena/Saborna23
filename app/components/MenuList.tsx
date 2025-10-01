"use client";

import { BitterRose, ChillaxMedium } from "../utils/fonts";
import { JSX, useEffect, useState } from "react";
import { useCurrentLocale, useI18n } from "@/locales/client";

import Image from "next/image";
import Link from "next/link";
import MenuCard from "./MenuCard";
import Reveal from "./Animations/Reveal";
import back from "@/public/back.svg";
import menuListBG from "../menuList/menuListBG.json";
import menuListEN from "../menuList/menuList.json";
import { usePathname } from "next/navigation";

export default function MenuList(): JSX.Element {
  const t = useI18n();
  const locale = useCurrentLocale();
  const pathname = usePathname();
  // const [menuSection, setMenuSection] = useState("");

  const [selectedTab, setSelectedTab] = useState<string>("");

  const menuList = locale === "bg" ? menuListBG : menuListEN;

  const category = pathname.split("/")[3];

  useEffect(() => {
    if (category === "drinks") {
      setSelectedTab("Hot Drinks");
    } else if (category === "wine") {
      setSelectedTab("White");
    } else if (category === "food") {
      setSelectedTab("Salads");
    }
  }, [category]);

  const renderMenu = () => {
    const selectedCategory = menuList.menu.filter(
      (item) => item["semi-category"] === selectedTab
    );

    if (selectedCategory.length === 0) {
      return (
        <div className="text-center mt-4">
          No items available in this section.
        </div>
      );
    }

    return (
      <div className="mb-10">
        {selectedCategory.map((item) => (
          <div
            key={item.id}
            className="max-w-[800px] mx-auto flex flex-col mt-10"
          >
            <div className="flex flex-col items-center">
              <h4 className="text-xl text-center">{item.name}</h4>
              {item.description && (
                <p className="text-lg text-center">{item.description}</p>
              )}
              {item.price && item.quantity && (
                <span className="font-bold text-xl">
                  {`${item.price} / ${item.quantity}`}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-1 xl:grid-cols-2">
        <div
          className={`relative w-full h-full flex flex-col justify-center items-center `}
          style={{
            background: `url("/menu-4.webp")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="w-full text-center p-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <Reveal initial={{ y: "-5%" }} animate={{ y: "0%" }}>
              <h1
                className={`text-4xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
              >
                Menu <br />
                <span
                  className={`text-7xl text-white ${ChillaxMedium.className}`}
                >
                  {(category === "drinks" && "Drinks") ||
                    (category === "wine" && "Wine") ||
                    (category === "food" && "Food")}
                </span>
              </h1>
            </Reveal>
          </div>
        </div>

        <div className="pt-20 xl:pb-60 flex flex-col gap-20 items-center px-4 text-center overflow-y-scroll no-scrollbar z-50">
          <div className="w-full grid grid-cols-1 items-center">
            <div className=" px-4 sm:px-20 py-16 -mt-28 md:-mt-20 lg:-mt-32 text-center lg:text-left">
              <div className="flex flex-col items-center mt-16 sm:mt-20">
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {category === "drinks" && (
                    <>
                      <Link href="/menu">
                        <Image
                          src={back}
                          alt="Back"
                          priority
                          className="w-full h-auto"
                        />
                      </Link>
                      <MenuCard
                        text1={t("menu.hotDrinks")}
                        onClick={() => setSelectedTab("Hot Drinks")}
                        active={selectedTab === "Hot Drinks"}
                      />
                      <MenuCard
                        text1={t("menu.softDrinks")}
                        onClick={() => setSelectedTab("Non-alcoholic Drinks")}
                        active={selectedTab === "Non-alcoholic Drinks"}
                      />
                      <MenuCard
                        text1={t("menu.mixedDrinks")}
                        onClick={() => setSelectedTab("Mixed Drinks")}
                        active={selectedTab === "Mixed Drinks"}
                      />
                      <MenuCard
                        text1={t("menu.whiskey")}
                        onClick={() => setSelectedTab("Whiskey")}
                        active={selectedTab === "Whiskey"}
                      />
                      <MenuCard
                        text1={t("menu.vodka")}
                        onClick={() => setSelectedTab("Vodka")}
                        active={selectedTab === "Vodka"}
                      />
                      <MenuCard
                        text1={t("menu.gin")}
                        onClick={() => setSelectedTab("Gin")}
                        active={selectedTab === "Gin"}
                      />
                      <MenuCard
                        text1={t("menu.cognac")}
                        onClick={() => setSelectedTab("Cognac")}
                        active={selectedTab === "Cognac"}
                      />
                      <MenuCard
                        text1={t("menu.rum")}
                        onClick={() => setSelectedTab("Rum")}
                        active={selectedTab === "Rum"}
                      />
                      <MenuCard
                        text1={t("menu.tequila")}
                        onClick={() => setSelectedTab("Tequila")}
                        active={selectedTab === "Tequila"}
                      />
                      <MenuCard
                        text1={t("menu.rakia")}
                        onClick={() => setSelectedTab("Rakia")}
                        active={selectedTab === "Rakia"}
                      />
                      <MenuCard
                        text1={t("menu.anise")}
                        onClick={() => setSelectedTab("Anise")}
                        active={selectedTab === "Anise"}
                      />
                      <MenuCard
                        text1={t("menu.liqueurs")}
                        onClick={() => setSelectedTab("Liqueurs")}
                        active={selectedTab === "Liqueurs"}
                      />
                      <MenuCard
                        text1={t("menu.beer")}
                        onClick={() => setSelectedTab("Beer")}
                        active={selectedTab === "Beer"}
                      />
                    </>
                  )}
                  {category === "wine" && (
                    <>
                      <Link href="/menu">
                        <Image
                          src={back}
                          alt="Back"
                          priority
                          className="w-full h-auto"
                        />
                      </Link>
                      <MenuCard
                        text1={t("menu.white")}
                        onClick={() => setSelectedTab("White")}
                        active={selectedTab === "White"}
                      />
                      <MenuCard
                        text1={t("menu.rose")}
                        onClick={() => setSelectedTab("Rose")}
                        active={selectedTab === "Rose"}
                      />
                      <MenuCard
                        text1={t("menu.red")}
                        onClick={() => setSelectedTab("Red")}
                        active={selectedTab === "Red"}
                      />
                      <MenuCard
                        text1={t("menu.sparkling")}
                        onClick={() => setSelectedTab("Sparkling")}
                        active={selectedTab === "Sparkling"}
                      />
                      <MenuCard
                        text1={t("menu.nonAlcoholic")}
                        onClick={() => setSelectedTab("Non-alcoholic")}
                        active={selectedTab === "Non-alcoholic"}
                      />
                      <MenuCard
                        text1={t("menu.byglass")}
                        onClick={() => setSelectedTab("Non-Wine by the Glass")}
                        active={selectedTab === "Non-Wine by the Glass"}
                      />
                    </>
                  )}
                  {category === "food" && (
                    <>
                      <Link href="/menu">
                        <Image
                          src={back}
                          alt="Back"
                          priority
                          className="w-full h-auto"
                        />
                      </Link>
                      <MenuCard
                        text1={t("menu.salads")}
                        onClick={() => setSelectedTab("Salads")}
                        active={selectedTab === "Salads"}
                      />
                      <MenuCard
                        text1={t("menu.forSharing")}
                        onClick={() => setSelectedTab("Starters")}
                        active={selectedTab === "Starters"}
                      />
                      <MenuCard
                        text1={t("menu.mainCourses")}
                        onClick={() => setSelectedTab("Main courses")}
                        active={selectedTab === "Main courses"}
                      />
                      <MenuCard
                        text1={t("menu.desserts")}
                        onClick={() => setSelectedTab("Desserts")}
                        active={selectedTab === "Desserts"}
                      />
                      <MenuCard
                        text1={t("menu.alergens")}
                        onClick={() => setSelectedTab("Alergens")}
                        active={selectedTab === "Alergens"}
                      />
                    </>
                  )}
                </div>
                <hr className="w-full my-4 border-t border-black" />
                {renderMenu()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
