import { BitterRose, ChillaxMedium } from "../utils/fonts";

import { JSX } from "react";
import { getI18n } from "@/locales/server";

// import Image from "next/image";
// import Link from "next/link";

// import socials1 from "@/public/socials-1.png";
// import socials2 from "@/public/socials-2.png";

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <section className="w-screen mx-auto relative h-screen">
        <div
          className={`w-full h-full flex flex-col justify-center items-center`}
          style={{
            background: `url("/hero.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="w-full justify-self-center text-center p-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <h1
              className={`mb-8 text-4xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
            >
              The pure taste of <br />
              <span
                className={`text-7xl lg:text-[160px] text-white  ${ChillaxMedium.className}`}
              >
                plovdiv
              </span>
            </h1>
            <p className="max-w-[800px] mx-auto text-xl lg:text-2xl text-white">
              {t("hero.text")}⁣ ⁣
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
