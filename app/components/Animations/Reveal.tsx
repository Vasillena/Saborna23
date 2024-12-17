"use client";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  initial: object;
  animate: object;
}

export default function Reveal({ children, initial, animate }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, ...initial }}
        animate={isInView ? { opacity: 1, ...animate } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
