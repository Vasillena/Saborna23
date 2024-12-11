import MenuList from "@/app/components/MenuList";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Напитки | saborna23.bg";
    description = "Меню Напитки";
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
      "напитки",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "drinks",
    ];
  } else if (locale === "en") {
    title = "Drinks | saborna23.bg";
    description = "Drinks Menu";
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
      "галерия",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "gallery",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en/menu/drinks" : "/bg/menu/drinks",
    languages: {
      bg: "/bg/menu/drinks",
      en: "/en/menu/drinks",
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
      <MenuList />
    </>
  );
}
