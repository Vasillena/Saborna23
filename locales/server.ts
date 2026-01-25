import bg from "./bg";
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(
    {
      en: () => import("./en"),
      bg: () => import("./bg"),
    },
    {
      fallbackLocale: bg,
    }
  );

export { setStaticParamsLocale } from "next-international/server";
