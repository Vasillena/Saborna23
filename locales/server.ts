import bg from "./bg";
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(
    {
      en: () => import("./en"),
      bg: () => import("./bg"),
    },
    {
      // Uncomment to set fallback locale
      fallbackLocale: bg,
    }
  );
//
