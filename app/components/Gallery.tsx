// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";

// import Image from "next/image";
// import { useRef } from "react";

// export default function Gallery(): JSX.Element {
//   const items = [
//     { id: 1, img: "/gallery-1.png", title: "Gallery Image 1" },
//     { id: 2, img: "/gallery-2.png", title: "Gallery Image 2" },
//     { id: 3, img: "/gallery-3.png", title: "Gallery Image 3" },
//     { id: 4, img: "/gallery-4.png", title: "Gallery Image 4" },
//     { id: 5, img: "/gallery-5.png", title: "Gallery Image 5" },
//     { id: 6, img: "/gallery-6.png", title: "Gallery Image 6" },
//     { id: 7, img: "/gallery-7.png", title: "Gallery Image 7" },
//   ];

//   const ref = useRef<HTMLDivElement>(null);

//   // Получаваме прогрес на скрол и го трансформираме само по X ос.
//   const { scrollYProgress } = useScroll({ target: ref });
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

//   return (
//     // <div className="h-screen relative max-w-screen-2xl mx-auto" ref={ref}>
//     //   {/* Основен контейнер за скрол, с фиксиран хоризонтален скрол */}
//     //   <div className="sticky top-0 flex h-screen w-full gap-4 items-center overflow-x-hidden mx-auto">
//     //     <motion.div style={{ x }} className="flex gap-8 h-full">
//     //       {items.map((item) => (
//     //         <div
//     //           className="h-screen w-screen flex items-center justify-center relative"
//     //           key={item.id}
//     //         >
//     //           <div className="relative w-full h-full">
//     //             <Image
//     //               src={item.img}
//     //               alt={item.title}
//     //               fill
//     //               className="object-cover"
//     //             />
//     //           </div>
//     //         </div>
//     //       ))}
//     //     </motion.div>
//     //   </div>
//     // </div>

//     <div className="max-w-[1440px] mx-auto relative h-screen">
//       <div className="w-full mx-auto relative h-screen flex flex-nowrap overflow-x-scroll">
//         {items.map((item) => (
//           <div
//             className="h-screen w-screen flex items-center justify-center relative"
//             key={item.id}
//           >
//             <div className="relative w-screen h-full">
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

import Image from "next/image";
import ResizeObserver from "resize-observer-polyfill";

const items = [
  { id: 1, img: "/gallery-1.png", title: "Gallery Image 1" },
  { id: 2, img: "/gallery-2.png", title: "Gallery Image 2" },
  { id: 3, img: "/gallery-3.png", title: "Gallery Image 3" },
  { id: 4, img: "/gallery-4.png", title: "Gallery Image 4" },
  { id: 5, img: "/gallery-5.png", title: "Gallery Image 5" },
  { id: 6, img: "/gallery-6.png", title: "Gallery Image 6" },
  { id: 7, img: "/gallery-7.png", title: "Gallery Image 7" },
  { id: 8, img: "/gallery-8.png", title: "Gallery Image 8" },
  { id: 9, img: "/gallery-9.png", title: "Gallery Image 9" },
  { id: 10, img: "/gallery-10.png", title: "Gallery Image 10" },
];

export default function Gallery(): JSX.Element {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
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
