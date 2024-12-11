import Gallery from "../../components/Gallery";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = (await params).locale;

  let title, description, keywords;

  if (locale === "bg") {
    title = "Галерия | saborna23.bg";
    description =
      "Обстановката се отличава с уютни детайли и високо ниво на обслужване, които правят всяко посещение незабравимо.";
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
  } else if (locale === "en") {
    title = "Gallery | saborna23.bg";
    description =
      "The ambiance is distinguished by cozy details and a high level of service, making every visit unforgettable.";
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
    canonical: locale === "en" ? "/en/gallery" : "/bg/gallery",
    languages: {
      bg: "/bg/gallery",
      en: "/en/gallery",
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

export default function GalleryPage() {
  return (
    <>
      <Gallery />
    </>
  );
}
