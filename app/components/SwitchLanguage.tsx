"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import Image from "next/image";
import language from "@/public/language.svg";

export function SwitchLanguage(): JSX.Element {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleChangeToEnglish = () => changeLocale("en");

  const handleChangeToBulgarian = () => changeLocale("bg");

  return (
    <>
      {locale !== "en" && (
        <button
          type="button"
          onClick={handleChangeToEnglish}
          className="fixed bottom-0 right-8 py-2 rounded-t-lg drop-shadow-sm bg-[#BAB2A7] px-2 md:px-4 flex items-center justify-center z-50 md:static md:w-auto md:py-0 md:rounded-none md:drop-shadow-none md:bg-transparent"
          aria-label="Switch to English"
        >
          <Image
            src={language}
            alt="Language"
            priority
            className="w-6 md:w-8 h-auto"
          />
        </button>
      )}
      {locale !== "bg" && (
        <button
          type="button"
          onClick={handleChangeToBulgarian}
          className="fixed bottom-0 right-8 py-2 rounded-t-lg drop-shadow-sm bg-[#BAB2A7] px-2 md:px-4 flex items-center justify-center z-50 md:static md:w-auto md:py-0 md:rounded-none md:drop-shadow-none md:bg-transparent"
          aria-label="Switch to Bulgarian"
        >
          <Image
            src={language}
            alt="Language"
            priority
            className="w-6 md:w-8 h-auto"
          />
        </button>
      )}
    </>
  );
}
