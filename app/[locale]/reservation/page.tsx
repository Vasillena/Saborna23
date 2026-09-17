import Contact from "@/app/components/Contact";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Резервации | saborna23.bg";
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
      "резервации",
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
      "reservation",
    ];
  } else if (locale === "en") {
    title = "Reservation | saborna23.bg";
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
      "резервации",
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
      "reservation",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en/reservation" : "/bg/reservation",
    languages: {
      bg: "/bg/reservation",
      en: "/en/reservation",
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
