import { BitterRose, ChillaxMedium } from "../utils/fonts";

import Link from "next/link";

export default async function Menu(): Promise<JSX.Element> {
  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-3">
        <Link
          href="/menu/drinks"
          className="relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-10 transition-transform duration-500 hover:scale-105"
          style={{
            background: `url("/menu-1.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="text-center">
            <h1
              className={`mb-8 text-3xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
            >
              Drinks <br />
              <span
                className={`text-7xl text-white ${ChillaxMedium.className}`}
              >
                Refreshing
              </span>
            </h1>
          </div>
        </Link>

        <Link
          href="/menu/wine"
          className="relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-10 transition-transform duration-500 hover:scale-105"
          style={{
            background: `url("/menu-2.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="text-center">
            <h1
              className={`mb-8 text-3xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
            >
              Wine <br />
              <span
                className={`text-7xl text-white ${ChillaxMedium.className}`}
              >
                Fine
              </span>
            </h1>
          </div>
        </Link>

        <Link
          href="/menu/food"
          className="relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-10 transition-transform duration-500 hover:scale-105"
          style={{
            background: `url("/menu-3.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="text-center">
            <h1
              className={`mb-8 text-3xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
            >
              Food <br />
              <span
                className={`text-7xl text-white ${ChillaxMedium.className}`}
              >
                Delectable
              </span>
            </h1>
          </div>
        </Link>
      </section>
    </>
  );
}
