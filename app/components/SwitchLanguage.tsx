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
          className="px-4 flex items-center justify-center text-[#30312a] z-50"
          aria-label="Switch to English"
        >
          <Image
            src={language}
            alt="Language"
            priority
            className="w-8 h-auto"
          />
        </button>
      )}
      {locale !== "bg" && (
        <button
          type="button"
          onClick={handleChangeToBulgarian}
          className="px-4 flex items-center justify-center text-[#30312a] z-50"
          aria-label="Switch to Bulgarian"
        >
          <Image
            src={language}
            alt="Language"
            priority
            className="w-8 h-auto"
          />
        </button>
      )}
    </>
  );
}
