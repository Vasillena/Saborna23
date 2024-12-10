"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import { SwitchLanguage } from "./SwitchLanguage";
import clock from "@/public/clock.svg";
import close from "@/public/close.svg";
import logo from "@/public/logo-2.png";
import menu from "@/public/menu.svg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
      <div
        className={`max-w-[640px] hidden fixed bottom-10 left-0 right-0 mx-auto md:block z-50 transition-all duration-500 `}
      >
        <div className="px-4 py-2 flex justify-center items-center bg-white rounded-full">
          <button className="px-4">
            <Image src={clock} alt="Clock" priority className="w-8 h-auto" />
          </button>

          <MainNav />
          <SwitchLanguage />
          {/* <Link href="/" className="ml-4 flex lg:ml-0 lg:mr-6 px-5">
              <Image src={clock} alt="Clock" priority className="w-16 h-auto" />
            </Link> */}
          {/* </MainNav> */}
        </div>
      </div>
      <div
        className="
           max-w-[1440px] block fixed top-0 left-0 right-0 mx-auto md:hidden z-50"
      >
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
          <div className="w-14 flex justify-center items-center">
            <Link href="/">
              <Image
                src={clock}
                alt="Clock"
                priority
                className="w-full h-auto p-2 rounded-full"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
              />
            </Link>
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
              <Image
                src={logo}
                alt="Logo"
                // width={112}
                width={120}
                priority
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                // className="p-4 rounded-full"
              />
            </div>
            <MainNav closeMenu={closeMenu} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
