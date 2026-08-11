"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { industries } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Marquee from "./ui/Marquee";
import Reveal from "./ui/Reveal";
import styles from "./Industries.module.css";

// heading animates in word by word
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const word = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
};

const headingWords = "Industries We Empower".split(" ");

export default function Industries() {
  return (
    <section className={styles.section} aria-labelledby="industries">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Industries</SectionLabel>

          <SectionTitle id="industries" onDark>
            <motion.span
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: "0.28em" }}
            >
              {headingWords.map((w) => (
                <motion.span key={w} variants={word} style={{ display: "inline-block" }}>
                  {w}
                </motion.span>
              ))}
            </motion.span>
          </SectionTitle>

          <div>
            <p className={styles.intro}>
              Every industry is different. That&apos;s why we create strategies according to your
              business and goals.
            </p>
            <p className={styles.quote}>
              &ldquo;We don&apos;t use the same copy-paste plan for every industry.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>

      <Marquee speed={38} gap={28} className={styles.strip}>
        {industries.map((industry) => (
          <div key={industry.label} className={styles.item}>
            <span className={styles.thumb}>
              <Image src={industry.image} alt={industry.label} width={211} height={191} sizes="211px" />
            </span>
            <span className={styles.label}>{industry.label}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
