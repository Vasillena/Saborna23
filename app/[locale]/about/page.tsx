import About from "@/app/components/About";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  let title, description, keywords;

  if (locale === "bg") {
    title = "За нас | saborna23.bg";
    description =
      "Пътят към вкусната храна е застлан с павета. Със своя аристократичен уют “Съборна 23” те посреща величествено,за да те впечатли с храна и за “твоето място”.";
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
      "за нас",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "about us",
    ];
  } else if (locale === "en") {
    title = "About us | saborna23.bg";
    description =
      "The path to delicious food is paved with cobblestones. With its aristocratic charm, 'Saborna 23' welcomes you majestically, ready to impress with its cuisine and 'your special place.'";
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
      "за нас",
      "Saborna 23",
      "restaurant Saborna 23",
      "restaurant Plovdiv",
      "Plovdiv",
      "food Plovdiv",
      "dinner",
      "wine",
      "vibe",
      "nightlife",
      "about us",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en/about" : "/bg/about",
    languages: {
      bg: "/bg/about",
      en: "/en/about",
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

export default async function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
