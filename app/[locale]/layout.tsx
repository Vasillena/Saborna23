import "./globals.css";

import Image from "next/image";
import { MazzardLRegular } from "../utils/fonts";
import Navbar from "../components/Navbar";
import Provider from "./provider";
import { ReactNode } from "react";
import logo from "@/public/logo.webp";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Ресторант Съборна 23 | saborna23.bg";
    description =
      "Сгушен в подножието на Стария град и началото на Капана, Съборна 23 е сборен пункт на любителите на авторската кухня, хубавото вино и перфектният сервиз в сърцето на Пловдив.";
    keywords = [
      "Съборна 23",
      "ресторант Съборна 23",
      "Съборна 23 Пловдив",
      "ресторант Пловдив",
      "Пловдив",
      "храна Пловдив",
      "вечеря",
      "вино",
      "атмосфера",
      "нощен живот",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
    ];
  } else if (locale === "en") {
    title = "Restaurant Saborna 23 | saborna23.bg";
    description =
      "Nestled at the foot of the Old Town and the beginning of Kapana, 'Saborna 23' is a gathering spot for enthusiasts of gourmet cuisine, fine wine, and perfect service in the heart of Plovdiv.";
    keywords = [
      "Съборна 23",
      "ресторант Съборна 23",
      "Съборна 23 Пловдив",
      "ресторант Пловдив",
      "Пловдив",
      "храна Пловдив",
      "вечеря",
      "вино",
      "атмосфера",
      "нощен живот",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en" : "/",
    languages: {
      bg: "/bg",
      en: "/en",
    },
  };

  const metadataBase = new URL("https://saborna23.bg");

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${MazzardLRegular.className} antialiased`}>
        <Provider locale={Promise.resolve({ locale })}>
          <div className="hidden absolute top-8 w-full md:flex justify-center items-center z-50">
            <div className="w-[160px] xl:w-[200px]">
              <Image
                src={logo}
                alt="Logo"
                // width={200}
                priority
              />
            </div>
          </div>

          {children}
          <Navbar />
        </Provider>
      </body>
    </html>
  );
}
