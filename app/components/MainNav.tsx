"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";
import { usePathname, useRouter } from "next/navigation";

import { ChillaxMedium } from "../utils/fonts";
import Link from "next/link";
import { useMemo } from "react";

interface MainNavProps {
  children?: React.ReactNode;
  closeMenu?: () => void;
}

export default function MainNav({ closeMenu }: MainNavProps): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const t = useI18n();

  const links = useMemo(
    () => [
      {
        href: "/",
        label: t("nav.home"),
        active: pathname === `/${locale}`,
      },
      {
        href: "/menu",
        label: t("nav.menu"),
        active: pathname === `/${locale}/menu`,
      },
      {
        href: "/about",
        label: t("nav.about"),
        active: pathname === `/${locale}/about`,
      },
      {
        href: "/gallery",
        label: t("nav.gallery"),
        active: pathname === `/${locale}/gallery`,
      },
      {
        href: "/contact",
        label: t("nav.contact"),
        active: pathname === `/${locale}/contact`,
      },
    ],
    [t, locale, pathname]
  );

  return (
    <nav className="flex flex-col md:flex-row items-left md:items-center space-y-4 md:space-y-0">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center px-4 py-2 rounded-full text-xl hover:text-black ${
            ChillaxMedium.className
          }, ${link.active ? "bg-[#BAB2A7]" : ""}`}
          onClick={() => {
            router.push(link.href);
            closeMenu?.();
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
