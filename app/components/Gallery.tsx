"use client";

import React, {
  JSX,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import Image from "next/image";
import ResizeObserver from "resize-observer-polyfill";

const items = [
  { id: 0, img: "/hero.webp", title: "Gallery Hero Image" },
  { id: 1, img: "/gallery-1.webp", title: "Gallery Image 1" },
  { id: 2, img: "/gallery-2.webp", title: "Gallery Image 2" },
  { id: 3, img: "/gallery-3.webp", title: "Gallery Image 3" },
  { id: 4, img: "/gallery-4.webp", title: "Gallery Image 4" },
  { id: 5, img: "/gallery-5.webp", title: "Gallery Image 5" },
  { id: 6, img: "/gallery-6.webp", title: "Gallery Image 6" },
  { id: 7, img: "/gallery-7.webp", title: "Gallery Image 7" },
  { id: 9, img: "/gallery-9.webp", title: "Gallery Image 9" },
  { id: 10, img: "/gallery-10.webp", title: "Gallery Image 10" },
  { id: 11, img: "/gallery-11.webp", title: "Gallery Image 11" },
  { id: 12, img: "/gallery-12.webp", title: "Gallery Image 12" },
  { id: 13, img: "/gallery-13.webp", title: "Gallery Image 13" },
  { id: 14, img: "/gallery-14.webp", title: "Gallery Image 14" },
  { id: 15, img: "/gallery-15.webp", title: "Gallery Image 15" },
  { id: 16, img: "/gallery-16.webp", title: "Gallery Image 16" },
  { id: 17, img: "/gallery-17.webp", title: "Gallery Image 17" },
  { id: 18, img: "/gallery-18.webp", title: "Gallery Image 18" },
];

export default function Gallery(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef]);

  interface ResizeEntry {
    contentRect: DOMRectReadOnly;
  }

  const onResize = useCallback((entries: ResizeEntry[]) => {
    for (const entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    if (ghostRef.current) {
      resizeObserver.observe(ghostRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      {isMobile ? (
        <section className="w-full">
          {items.map((item) => (
            <div className="relative w-full h-[24vh]" key={item.id}>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </section>
      ) : (
        <>
          <div className="fixed left-0 right-0 will-change-transform">
            <motion.section
              ref={scrollRef}
              style={{ x: spring }}
              className="relative h-screen max-w-max flex items-center"
            >
              <div className="relative flex border-8 border-yellow">
                {items.map((item) => (
                  <div
                    className="lg:h-screen w-screen flex items-center justify-center relative"
                    key={item.id}
                  >
                    <div className="relative w-full max-w-[1440px] h-full">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
          <div
            ref={ghostRef}
            style={{ height: scrollRange }}
            className="w-full"
          />
        </>
      )}
    </>
  );
}
