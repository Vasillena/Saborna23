"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import { JSX } from "react";
import MainNav from "./MainNav";
import { SwitchLanguage } from "./SwitchLanguage";
import clock from "@/public/clock.svg";
import close from "@/public/close.svg";
import logo from "@/public/logo-2.webp";
import menu from "@/public/menu.svg";
import { motion } from "framer-motion";
import { useI18n } from "@/locales/client";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const t = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [closeMenu, open]);

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  return (
    <div className="max-w-[1440px]">
      {/* Desktop Navbar */}
      <div
        className={`max-w-[640px] hidden fixed bottom-10 left-0 right-0 mx-auto md:block z-50 transition-all duration-500`}
      >
        <div className="px-4 py-2 flex justify-center items-center bg-white rounded-full relative">
          <button
            className="px-4 relative"
            onMouseEnter={() => setShowHours(true)}
            onMouseLeave={() => setShowHours(false)}
          >
            <Image src={clock} alt="Clock" priority className="w-8 h-auto" />
            {showHours && (
              <div className="w-60 absolute top-[-480%] -left-20 bg-white shadow-md rounded-lg p-4 text-sm">
                <h3 className="text-xl font-bold"> {t("nav.hours")}</h3>
                <p className="text-lg">
                  <span className="font-bold"> {t("nav.week")}</span> 5pm - 11pm
                </p>
                <p className="text-lg">
                  <span className="font-bold"> {t("nav.weekend")}</span> 12pm -
                  11pm
                </p>
              </div>
            )}
          </button>

          <MainNav />
          <SwitchLanguage />
        </div>
      </div>

      <div className="max-w-[1440px] block fixed top-0 left-0 right-0 mx-auto md:hidden z-50">
        <SwitchLanguage />
        <div className="w-full flex h-16 justify-between items-center px-4">
          <div className="w-full">
            <div
              ref={buttonRef}
              className="w-12 h-12 flex justify-center items-center"
            >
              <button onClick={() => setOpen(!open)}>
                <Image
                  src={open ? close : menu}
                  alt="Menu image"
                  className="p-2 rounded-full"
                  style={{
                    width: "32px",
                    height: "auto",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  }}
                />
              </button>
            </div>
          </div>

          <div className="w-14 flex justify-center items-center relative">
            <button onClick={() => setShowHours(!showHours)}>
              <Image
                src={clock}
                alt="Clock"
                priority
                className="w-full h-auto p-2 rounded-full"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
              />
            </button>
            {showHours && (
              <div className="w-48 absolute top-[120%] -left-40 bg-white shadow-md rounded-lg p-4 text-center">
                <h3 className="text-lg font-bold"> {t("nav.hours")}</h3>
                <p>
                  <span className="font-bold">{t("nav.week")}</span> 5pm - 12am
                </p>
                <p>
                  <span className="font-bold">{t("nav.weekend")}</span> 1pm -
                  12am
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          ref={menuRef}
          className="fixed top-0 left-0 z-50 w-1/2 h-screen flex flex-col justify-center items-center bg-[#f0f0f0] py-8 border-r border-[#30312a]"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <button onClick={() => setOpen(!open)}>
              <Image
                src={close}
                alt="Close image"
                className="fixed top-4 left-6"
                style={{
                  width: "32px",
                  height: "auto",
                }}
              />
            </button>
            <div className="w-full flex justify-center items-center z-50 mb-20">
              <Image src={logo} alt="Logo" width={120} priority />
            </div>
            <MainNav closeMenu={closeMenu} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
