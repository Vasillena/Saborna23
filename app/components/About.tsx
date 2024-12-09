import { BitterRose, ChillaxMedium } from "../utils/fonts";

import Image from "next/image";
import decor from "@/public/about-2.png";

export default async function About(): Promise<JSX.Element> {
  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-2">
        <div
          className={`relative w-full h-full flex flex-col justify-center items-center px-4 sm:px-10`}
          style={{
            background: `url("/about.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="text-center">
            <h1
              className={`mb-8 text-3xl lg:text-7xl text-[#BAB2A7] ${BitterRose.className}`}
            >
              About <br />
              <span
                className={`text-7xl text-white ${ChillaxMedium.className}`}
              >
                Something something
              </span>
            </h1>
          </div>
        </div>

        <div className="h-screen pt-[700px] pb-60 flex flex-col gap-20 items-center justify-center px-20 text-center overflow-y-scroll no-scrollbar">
          <p className="text-xl lg:text-2xl">
            Пътят към вкусната храна е застлан с павета. Със своя аристократичен
            уют “Съборна 23” те посреща величествено,за да те впечатли с храна и
            усещането за “твоето място”.
          </p>
          <div className="w-full">
            <Image src={decor} alt="Decor" width={680} priority />
          </div>
          <p className="text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            malesuada nunc vel risus commodo viverra maecenas. Dis parturient
            montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
            ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant morbi tristique. Turpis massa sed
            elementum tempus egestas sed sed risus.
          </p>
          <p className="text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            malesuada nunc vel risus commodo viverra maecenas. Dis parturient
            montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
            ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant morbi tristique. Turpis massa sed
            elementum tempus egestas sed sed risus.
          </p>
          <p className="text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            malesuada nunc vel risus commodo viverra maecenas. Dis parturient
            montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
            ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant morbi tristique. Turpis massa sed
            elementum tempus egestas sed sed risus.
          </p>
        </div>
      </section>
    </>
  );
}
