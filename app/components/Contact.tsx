import { BitterRose, ChillaxMedium } from "../utils/fonts";

import Image from "next/image";
import { JSX } from "react";
import Link from "next/link";
import Reveal from "./Animations/Reveal";
import { getI18n } from "@/locales/server";
import location from "@/public/location.svg";
import phone from "@/public/phone.svg";
import socials1 from "@/public/socials-1.svg";
import socials2 from "@/public/socials-2.svg";

export default async function Contact(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <>
      <section className="max-w-[1440px] mx-auto relative h-screen grid grid-cols-1 md:grid-cols-2">
        <div
          className={`relative w-full h-full flex flex-col justify-center items-center`}
          style={{
            background: `url("/contact.webp")`,
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
                Contact <br />
                <span
                  className={`text-7xl text-white ${ChillaxMedium.className}`}
                >
                  Get in Touch
                </span>
              </h1>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col gap-20 items-center justify-center px-4 md:px-20 text-center mt-4 md:mt-0">
          <Reveal initial={{ y: "-5%" }} animate={{ y: "0%" }}>
            <p className="text-xl lg:text-2xl">
              {t("contacts.text-1")}⁣ ⁣ <br />
              {t("contacts.text-2")}⁣ ⁣
            </p>
          </Reveal>
          <Reveal initial={{ y: "-5%" }} animate={{ y: "0%" }}>
            <address className="not-italic">
              <p className="flex justify-center items-center gap-4 text-xl lg:text-2xl">
                <Image
                  src={phone}
                  alt="Phone"
                  priority
                  className="w-6 h-auto"
                />
                <a href="tel:0890236023">089 023 6023</a>
              </p>

              <p className="flex justify-center items-center gap-4 text-xl lg:text-2xl">
                <Image
                  src={location}
                  alt="Location"
                  priority
                  className="w-6 h-auto"
                />
                <a
                  href="https://goo.gl/maps/xXY123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contacts.text-3")}
                </a>
              </p>
            </address>
          </Reveal>
          <Reveal initial={{ y: "-5%" }} animate={{ y: "0%" }}>
            <div className="flex gap-4 pb-20 md:0">
              <Link href="https://www.facebook.com/saborna23" target="_blank">
                <Image
                  src={socials1}
                  alt="Facebook"
                  priority
                  className="w-6 h-auto"
                />
              </Link>
              <Link
                href="https://www.instagram.com/saborna.23/"
                target="_blank"
              >
                <Image
                  src={socials2}
                  alt="Instagram"
                  priority
                  className="w-6 h-auto"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
