import { BitterRose, ChillaxMedium } from "../utils/fonts";

import Image from "next/image";
import { JSX } from "react";
import Reveal from "./Animations/Reveal";
import decor from "@/public/about-2.webp";
import decor2 from "@/public/about-3.webp";
import decor3 from "@/public/about-4.webp";
import decor4 from "@/public/about-5.webp";
import decor5 from "@/public/about-6.webp";
import decor6 from "@/public/about-7.webp";
import decor7 from "@/public/about-8.webp";
import decor8 from "@/public/about-9.webp";
import { getI18n } from "@/locales/server";

export default async function About(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-1 md:grid-cols-2">
        <div
          className={`relative w-full h-full flex flex-col justify-center items-center`}
          style={{
            background: `url("/about.webp")`,
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
                About <br />
                <span
                  className={`text-7xl text-white ${ChillaxMedium.className}`}
                >
                  Us
                </span>
              </h1>
            </Reveal>
          </div>
        </div>

        <div className="h-screen pt-20 pb-20 md:pb-60 flex flex-col gap-10 items-center px-4 md:px-20 text-center overflow-y-scroll no-scrollbar">
          <p className="text-xl lg:text-2xl">{t("about.text-1")}⁣</p>
          <Reveal initial={{ y: "-5%" }} animate={{ y: "0%" }}>
            <div className="w-full">
              <Image src={decor} alt="Decor" width={680} priority />
            </div>
          </Reveal>
          <p className="text-xl lg:text-2xl">{t("about.text-2")}</p>
          <Reveal initial={{ y: "-5%" }} animate={{ y: "0%" }}>
            <div className="w-full">
              <Image src={decor7} alt="Decor" width={680} priority />
            </div>
          </Reveal>

          <p className="text-xl lg:text-2xl">{t("about.text-3")}</p>
          <div className="w-full">
            <Image src={decor2} alt="Decor" width={680} priority />
          </div>
          <p className="text-xl lg:text-2xl">{t("about.text-4")}</p>
          <div className="w-full">
            <Image src={decor3} alt="Decor" width={680} priority />
          </div>
          <p className="text-xl lg:text-2xl">{t("about.text-5")}</p>
          <div className="w-full">
            <Image src={decor8} alt="Decor" width={680} priority />
          </div>
          <p className="text-xl lg:text-2xl">{t("about.text-6")}</p>
          <div className="w-full">
            <Image src={decor4} alt="Decor" width={680} priority />
          </div>
          <p className="text-xl lg:text-2xl">{t("about.text-7")}</p>
          <div className="w-full">
            <Image src={decor5} alt="Decor" width={680} priority />
          </div>
          <p className="text-xl lg:text-2xl">{t("about.text-8")}</p>
          <div className="w-full">
            <Image src={decor6} alt="Decor" width={680} priority />
          </div>
          <p className="text-xl lg:text-2xl">{t("about.text-9")}</p>
        </div>
      </section>
    </>
  );
}
