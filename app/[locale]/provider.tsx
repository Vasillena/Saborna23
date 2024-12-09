import { I18nProviderClient } from "../../locales/client";
import { ReactNode } from "react";

type ProviderProps = {
  locale: Promise<{ locale: string }>;
  children: ReactNode;
};

export default async function Provider({ locale, children }: ProviderProps) {
  const { locale: resolvedLocale } = await locale;

  return (
    <I18nProviderClient locale={resolvedLocale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}
