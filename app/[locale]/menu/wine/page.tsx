import MenuList from "@/app/components/MenuList";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Вино | saborna23.bg";
    description = "Винена Листа";
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
    title = "Wine | saborna23.bg";
    description = "Wine List";
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
    canonical: locale === "en" ? "/en/menu/wine" : "/bg/menu/wine",
    languages: {
      bg: "/bg/menu/wine",
      en: "/en/menu/wine",
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
