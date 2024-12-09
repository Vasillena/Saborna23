import { BitterRose, ChillaxMedium } from "../utils/fonts";

import Image from "next/image";
import logo from "@/public/logo.png";

// import Image from "next/image";
// import Link from "next/link";
// import { getI18n } from "@/locales/server";
// import socials1 from "@/public/socials-1.png";
// import socials2 from "@/public/socials-2.png";

export default async function Hero(): Promise<JSX.Element> {
  //   const t = await getI18n();

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
            // width: "100vw",
            // height: "100vh",
          }}
        >
          <div className="max-w-[800px] justify-self-center text-center">
            <div className="absolute top-8 mx-auto left-0 right-0 w-full flex justify-center items-center z-50">
              <Image src={logo} alt="Logo" width={88} priority />
            </div>
            <h1
              className={`mb-8 text-3xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
            >
              The pure taste of <br />
              <span
                className={`text-[160px] text-white ${ChillaxMedium.className}`}
              >
                plovdiv
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white">
              Сгушен в подножието на Стария град и началото на Капана, Съборна
              23 е сборен пункт на любителите на авторската кухня, хубавото вино
              и перфектният сервиз в сърцето на Пловдив.⁣ ⁣
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
