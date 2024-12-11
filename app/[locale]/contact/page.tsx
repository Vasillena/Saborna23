import Contact from "@/app/components/Contact";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Контакти | saborna23.bg";
    description =
      "Допълваме специалните ви моменти и се грижим за страхотното извживяване на вас и вашите гости. С повод или без при нас всеки ден е празник! Заповядайте!";
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
      "контакти",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "contact",
    ];
  } else if (locale === "en") {
    title = "Contact | saborna23.bg";
    description =
      "We enhance your special moments and ensure an amazing experience for you and your guests. With or without an occasion, every day with us is a celebration! Welcome!";
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
      "контакти",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "contact",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en/contact" : "/bg/contact",
    languages: {
      bg: "/bg/contact",
      en: "/en/contact",
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

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
