"use client";

import { motion } from "motion/react";

/**
 * Fade-and-rise on scroll. The Figma file has no prototype animation, so this
 * is a single restrained default reused across every section.
 */
export default function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
