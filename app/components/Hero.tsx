import { BitterRose, ChillaxMedium } from "../utils/fonts";

import { JSX } from "react";
import Reveal from "./Animations/Reveal";
import { getI18n } from "@/locales/server";

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <section className="w-screen mx-auto relative h-screen">
        <div
          className={`w-full h-full flex flex-col justify-center items-center`}
          style={{
            background: `url("/hero.webp")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="w-full justify-self-center text-center p-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <Reveal initial={{ y: "-5%" }} animate={{ y: "0%" }}>
              <h1
                className={`mb-8 text-4xl sm:text-5xl xl:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
              >
                The pure taste of <br />
                <span
                  className={`text-7xl sm:text-8xl xl:text-[160px] text-white  ${ChillaxMedium.className}`}
                >
                  plovdiv
                </span>
              </h1>
              <p className="max-w-[800px] mx-auto text-xl lg:text-2xl text-white">
                {t("hero.text")}⁣ ⁣
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
