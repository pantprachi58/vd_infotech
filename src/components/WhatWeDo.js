"use client";

import { useState } from "react";
import Image from "next/image";
import { whatWeDo } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./WhatWeDo.module.css";

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const current = whatWeDo[active];

  return (
    <section className={styles.section} aria-labelledby="what-we-do">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>What We Do</SectionLabel>
          <SectionTitle id="what-we-do">Your Strategic IT &amp; ITeS Consulting Partner</SectionTitle>
        </Reveal>

        <div className={styles.layout}>
          <ul className={styles.tabs} role="tablist" aria-label="Service areas">
            {whatWeDo.map((service, i) => (
              <li key={service.label}>
                <button
                  role="tab"
                  aria-selected={i === active}
                  className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.tabIcon} aria-hidden="true">
                    <Image
                      src={service.icon}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span>
                  {service.label}
                </button>
              </li>
            ))}
          </ul>

          <div>
            <div className={styles.panel} role="tabpanel" aria-label={current.label}>
              <Image
                className={styles.panelBg}
                src={current.image || "/images/frame-48096206.webp"}
                alt=""
                width={1056}
                height={734}
                sizes="(max-width: 991px) 100vw, 60vw"
              />
              <div className={styles.panelInner}>
                <h3 className={styles.panelTitle}>{current.title ?? current.label}</h3>
                <p className={styles.panelBody}>{current.body}</p>
                <ul className={styles.tags}>
                  {current.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className={styles.dots}>
              {whatWeDo.map((service, i) => (
                <li key={service.label}>
                  <button
                    className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Show ${service.label}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
