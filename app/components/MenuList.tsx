"use client";

import { BitterRose, ChillaxMedium } from "../utils/fonts";
import { useCurrentLocale, useI18n } from "@/locales/client";

import MenuCard from "./MenuCard";
import menuListBG from "../menuList/menuListBG.json";
import menuListEN from "../menuList/menuList.json";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MenuList(): JSX.Element {
  const t = useI18n();
  const locale = useCurrentLocale();
  const pathname = usePathname();
  // const [menuSection, setMenuSection] = useState("");

  const [selectedTab, setSelectedTab] = useState("");

  const menuList = locale === "bg" ? menuListBG : menuListEN;

  const category = pathname.split("/")[3];

  // const renderMenu = () => {
  //   const selectedCategory = menuList.menu.filter(
  //     (item) => item.category === category
  //   );
  //   const categoryNameObj = menuList.menu.find(
  //     (item) => item.category === category
  //   );

  //   // const renderMenu = () => {
  //   //   const selectedCategory = menuList.menu.filter(
  //   //     (item) => item.category === selectedTab
  //   //   );
  //   //   const categoryNameObj = menuList.menu.find(
  //   //     (item) => item.category === selectedTab
  //   //   );

  //   let sectionName = "";

  //   if (categoryNameObj) {
  //     sectionName = categoryNameObj["semi-category"];

  //     switch (sectionName) {
  //       case "Hot Drinks":
  //         if (locale === "bg") sectionName = "Топли Напитки";
  //         break;
  //       case "Non-alcoholic Drinks":
  //         if (locale === "bg") sectionName = "Безалкохолни напитки";
  //         break;
  //       case "Mixed Drinks":
  //         if (locale === "bg") sectionName = "Коктейли";
  //         break;
  //       case "Whiskey":
  //         if (locale === "bg") sectionName = "Уиски";
  //         break;
  //       case "Vodka":
  //         if (locale === "bg") sectionName = "Водка";
  //         break;
  //       case "Gin":
  //         if (locale === "bg") sectionName = "Джин";
  //         break;
  //       case "Cognac":
  //         if (locale === "bg") sectionName = "Коняк";
  //         break;
  //       case "Rum":
  //         if (locale === "bg") sectionName = "Ром";
  //         break;
  //       case "Tequila":
  //         if (locale === "bg") sectionName = "Текила";
  //         break;
  //       case "Rakia":
  //         if (locale === "bg") sectionName = "Ракия";
  //         break;
  //       case "Anise":
  //         if (locale === "bg") sectionName = "Анасон";
  //         break;
  //       case "Liqueurs":
  //         if (locale === "bg") sectionName = "Ликьори";
  //         break;
  //       case "Beer":
  //         if (locale === "bg") sectionName = "Бира";
  //         break;
  //       case "White":
  //         if (locale === "bg") sectionName = "Бяло";
  //         break;
  //       case "Rose":
  //         if (locale === "bg") sectionName = "Розе";
  //         break;
  //       case "Red":
  //         if (locale === "bg") sectionName = "Червено";
  //         break;
  //       case "Sparkling":
  //         if (locale === "bg") sectionName = "Пенливо";
  //         break;
  //       case "Salads":
  //         if (locale === "bg") sectionName = "Салати";
  //         break;
  //       case "For sharing":
  //         if (locale === "bg") sectionName = "За споделяне";
  //         break;
  //       case "Main courses":
  //         if (locale === "bg") sectionName = "Основни ястия";
  //         break;
  //       case "Desserts":
  //         if (locale === "bg") sectionName = "Десерти";
  //         break;
  //       default:
  //         break;
  //     }
  //   }

  //   if (selectedCategory && categoryNameObj && sectionName) {
  //     return (
  //       <div className="mb-10">
  //         {/* <h2
  //           className={`text-center my-4 text-[36px] md:text-[44px] ${BitterRose.className}`}
  //         >
  //           {sectionName}
  //         </h2> */}
  //         {selectedCategory.map((item) => (
  //           <div
  //             key={item.id}
  //             className="max-w-[800px] mx-auto flex flex-col mt-2"
  //             // className="w-full mx-auto flex flex-col"
  //           >
  //             {/* {item["semi-category"] && (
  //               <h3 className={`text-center mt-2 text-[22px] md:text-[24px]`}>
  //                 {item["semi-category"]}
  //               </h3>
  //             )} */}
  //             <div className="flex items-center">
  //               <h4 className="font-bold text-[16px] md:text-[20px]">
  //                 {item.name}
  //               </h4>
  //               <span className="flex-grow border-b border-dotted mx-2 pt-1.5 border-gray-300 md:border-black" />
  //               <span className="font-bold text-[14px] md:text-[20px]">
  //                 {`${item.price} / ${item.quantity}`}
  //               </span>
  //             </div>
  //             {item.description && (
  //               <p className="text-left pr-[40%] text-[14px] md:text-[16px]">
  //                 {item.description}
  //               </p>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   } else {
  //     return <div />;
  //   }
  // };

  const renderMenu = () => {
    // Filter menu items based on the selected tab
    const selectedCategory = menuList.menu.filter(
      (item) => item["semi-category"] === selectedTab
    );

    // If no items are available, show a message
    if (selectedCategory.length === 0) {
      return (
        <div className="text-center mt-4">
          No items available in this section.
        </div>
      );
    }

    // Render the items for the selected section
    return (
      <div className="mb-10">
        {selectedCategory.map((item) => (
          <div
            key={item.id}
            className="max-w-[800px] mx-auto flex flex-col mt-2"
          >
            <div className="flex items-center">
              <h4 className="font-bold text-[16px] md:text-[20px]">
                {item.name}
              </h4>
              <span className="flex-grow border-b border-dotted mx-2 pt-1.5 border-gray-300 md:border-black" />
              <span className="font-bold text-[14px] md:text-[20px]">
                {`${item.price} / ${item.quantity}`}
              </span>
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
            background: `url("/menu-4.png")`,
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
              Menu <br />
              <span
                className={`text-7xl text-white ${ChillaxMedium.className}`}
              >
                Drinks
              </span>
            </h1>
          </div>
        </div>

        <div className="pt-20 pb-60 flex flex-col gap-20 items-center px-4 text-center overflow-y-scroll no-scrollbar z-50">
          <div className="w-full grid grid-cols-1 items-center">
            <div className=" px-4 sm:px-20 py-16 -mt-28 md:-mt-20 lg:-mt-32 text-center lg:text-left">
              <div className="flex flex-col items-center mt-16 sm:mt-20">
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-0 sm:gap-8">
                  {category === "drinks" && (
                    <>
                      <MenuCard
                        text1={t("menu.softDrinks")}
                        onClick={() => setSelectedTab("Hot Drinks")}
                        active={selectedTab === "Hot Drinks"}
                      />
                      <MenuCard
                        text1="Non-alcoholic Drinks"
                        onClick={() => setSelectedTab("Non-alcoholic Drinks")}
                        active={selectedTab === "Non-alcoholic Drinks"}
                      />
                      <MenuCard
                        text1="Mixed Drinks"
                        onClick={() => setSelectedTab("Mixed Drinks")}
                        active={selectedTab === "Mixed Drinks"}
                      />
                      <MenuCard
                        text1="Whiskey"
                        onClick={() => setSelectedTab("Whiskey")}
                        active={selectedTab === "Whiskey"}
                      />
                      <MenuCard
                        text1="Vodka"
                        onClick={() => setSelectedTab("Vodka")}
                        active={selectedTab === "Vodka"}
                      />
                      <MenuCard
                        text1="Gin"
                        onClick={() => setSelectedTab("Gin")}
                        active={selectedTab === "Gin"}
                      />
                      <MenuCard
                        text1="Cognac"
                        onClick={() => setSelectedTab("Cognac")}
                        active={selectedTab === "Cognac"}
                      />
                      <MenuCard
                        text1="Rum"
                        onClick={() => setSelectedTab("Rum")}
                        active={selectedTab === "Rum"}
                      />
                      <MenuCard
                        text1="Tequila"
                        onClick={() => setSelectedTab("Tequila")}
                        active={selectedTab === "Tequila"}
                      />
                      <MenuCard
                        text1="Rakia"
                        onClick={() => setSelectedTab("Rakia")}
                        active={selectedTab === "Rakia"}
                      />
                      <MenuCard
                        text1="Anise"
                        onClick={() => setSelectedTab("Anise")}
                        active={selectedTab === "Anise"}
                      />
                      <MenuCard
                        text1="Liqueurs"
                        onClick={() => setSelectedTab("Liqueurs")}
                        active={selectedTab === "Liqueurs"}
                      />
                      <MenuCard
                        text1="Beer"
                        onClick={() => setSelectedTab("Beer")}
                        active={selectedTab === "Beer"}
                      />
                    </>
                  )}
                  {category === "wine" && (
                    <>
                      <MenuCard
                        text1="White"
                        onClick={() => setSelectedTab("White")}
                        active={selectedTab === "White"}
                      />
                      <MenuCard
                        text1="Rose"
                        onClick={() => setSelectedTab("Rose")}
                        active={selectedTab === "Rose"}
                      />
                      <MenuCard
                        text1="Red"
                        onClick={() => setSelectedTab("Red")}
                        active={selectedTab === "Red"}
                      />
                      <MenuCard
                        text1="Sparkling"
                        onClick={() => setSelectedTab("Sparkling")}
                        active={selectedTab === "Sparkling"}
                      />
                    </>
                  )}
                  {category === "food" && (
                    <>
                      <MenuCard
                        text1="Salads"
                        onClick={() => setSelectedTab("Salads")}
                        active={selectedTab === "Salads"}
                      />
                      <MenuCard
                        text1="For sharing"
                        onClick={() => setSelectedTab("For sharing")}
                        active={selectedTab === "For sharing"}
                      />
                      <MenuCard
                        text1="Main courses"
                        onClick={() => setSelectedTab("Main courses")}
                        active={selectedTab === "Main courses"}
                      />
                      <MenuCard
                        text1="Desserts"
                        onClick={() => setSelectedTab("Desserts")}
                        active={selectedTab === "Desserts"}
                      />
                    </>
                  )}
                </div>
                {renderMenu()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
