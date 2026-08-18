"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { processSteps } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./Process.module.css";

/**
 * The connector draws itself one leg at a time, following the numbered order:
 * 01 → 04 across the top, down and back, then 05 → 07. Each leg uses a
 * repeating dash background revealed with clip-path, so the dash pattern never
 * stretches the way a scale transform would.
 */
const reveals = {
  ltr: { from: "inset(0 100% 0 0)", to: "inset(0 0 0 0)" },
  rtl: { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0)" },
  ttb: { from: "inset(0 0 100% 0)", to: "inset(0 0 0 0)" },
};

function Leg({ shape, dir, delay, duration, active }) {
  const { from, to } = reveals[dir];
  return (
    <motion.span
      aria-hidden="true"
      className={`${styles.seg} ${styles[shape]}`}
      initial={{ clipPath: from }}
      animate={{ clipPath: active ? to : from }}
      transition={{ delay, duration, ease: "linear" }}
    />
  );
}

function Step({ step }) {
  return (
    <div className={styles.step}>
      <span className={styles.no}>{step.no}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepBody}>{step.body}</p>
    </div>
  );
}

export default function Process() {
  const rowsRef = useRef(null);
  const isInView = useInView(rowsRef, { once: true, amount: 0.35 });

  return (
    <section className={styles.section} aria-labelledby="process">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>The Perocess</SectionLabel>
          <SectionTitle id="process" className={styles.title}>
            Where Strategy Becomes Results
          </SectionTitle>
        </Reveal>

        <div ref={rowsRef} className={styles.rows}>
          <div className={`${styles.row} ${styles.rowOne}`}>
            <Leg shape="hTop" dir="ltr" delay={0.12} duration={1.15} active={isInView} />
            <Leg shape="vRight" dir="ttb" delay={1.27} duration={0.35} active={isInView} />

            {processSteps.slice(0, 4).map((step, i) => (
              <Reveal key={step.no} delay={i * 0.07}>
                <Step step={step} />
              </Reveal>
            ))}
          </div>

          <div className={`${styles.row} ${styles.rowTwo}`}>
            <Leg shape="hMid" dir="rtl" delay={1.62} duration={1.05} active={isInView} />
            <Leg shape="vLeft" dir="ttb" delay={2.67} duration={0.35} active={isInView} />
            <Leg shape="hBottom" dir="ltr" delay={3.02} duration={0.95} active={isInView} />

            {processSteps.slice(4).map((step, i) => (
              <Reveal key={step.no} delay={i * 0.07}>
                <Step step={step} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
