import MenuList from "@/app/components/MenuList";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Ястия | saborna23.bg";
    description = "Меню Ястия";
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
      "ястия",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "food",
    ];
  } else if (locale === "en") {
    title = "Food | saborna23.bg";
    description = "Food Menu";
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
      "ястия",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "food",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en/menu/food" : "/bg/menu/food",
    languages: {
      bg: "/bg/menu/food",
      en: "/en/menu/food",
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
