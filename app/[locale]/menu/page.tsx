import MenuHome from "@/app/components/MenuHome";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Меню | saborna23.bg";
    description =
      "Менюто предлага разнообразие от ястия с вдъхновение от балканската кухня. Храната се приготвя с внимание към детайла, комбинирайки традиционни рецепти и модерни кулинарни тенденции.";
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
      "меню",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "menu",
    ];
  } else if (locale === "en") {
    title = "Menu | saborna23.bg";
    description =
      "The menu offers a variety of dishes inspired by Balkan cuisine. The food is prepared with attention to detail, combining traditional recipes with modern culinary trends.";
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
      "меню",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "menu",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en/menu" : "/bg/menu",
    languages: {
      bg: "/bg/menu",
      en: "/en/menu",
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

export default function MenuPage() {
  return (
    <>
      <MenuHome />
    </>
  );
}
