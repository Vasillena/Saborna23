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
  { id: 1, img: "/gallery-1.jpg", title: "Gallery Image 1" },
  { id: 2, img: "/gallery-2.jpg", title: "Gallery Image 2" },
  { id: 3, img: "/gallery-3.jpg", title: "Gallery Image 3" },
  { id: 4, img: "/gallery-4.jpg", title: "Gallery Image 4" },
  { id: 5, img: "/gallery-5.jpg", title: "Gallery Image 5" },
  { id: 6, img: "/gallery-6.jpg", title: "Gallery Image 6" },
  { id: 7, img: "/gallery-7.jpg", title: "Gallery Image 7" },
];

export default function Gallery(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

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
      <div className="fixed left-0 right-0 will-change-transform">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="relative h-screen max-w-max flex items-center"
        >
          <div className="relative flex border-8 border-yellow">
            {items.map((item) => (
              <div
                className="h-screen w-screen flex items-center justify-center relative"
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
      <div ref={ghostRef} style={{ height: scrollRange }} className="w-full" />
    </>
  );
}
