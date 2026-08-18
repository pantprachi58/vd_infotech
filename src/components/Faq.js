"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { faqs } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";
import styles from "./Faq.module.css";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.section} aria-labelledby="faq">
      <div className="container">
        <Reveal className={styles.label}>
          <SectionLabel>Frequently Asked Questions</SectionLabel>
        </Reveal>

        <div className={styles.layout}>
          <Reveal>
            <h2 id="faq" className={styles.heading}>
              FAQ
            </h2>
            <p className={styles.sub}>
              Let&apos;s Clear Your
              <br />
              <span className={styles.accent}>Doubts</span>
            </p>
            <div className={styles.art}>
              <Image
                src="/images/quesmark-image.png"
                alt=""
                width={620}
                height={670}
                sizes="(max-width: 991px) 320px, 30vw"
              />
            </div>
          </Reveal>

          <ul className={styles.list}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal
                  key={faq.q}
                  as="li"
                  delay={i * 0.05}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                >
                  <button
                    className={styles.trigger}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className={styles.no}>{i + 1}.</span>
                    <span className={styles.question}>{faq.q}</span>
                    <span className={styles.chevron} aria-hidden="true">
                      <FiChevronDown />
                    </span>
                  </button>
                  <div className={styles.answer} id={`faq-answer-${i}`} role="region">
                    <p className={styles.answerInner}>{faq.a}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
