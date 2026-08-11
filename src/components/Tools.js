"use client";

import { useState } from "react";
import Image from "next/image";
import { toolTabs } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./Tools.module.css";

export default function Tools() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="tools">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Tools &amp; Platforms We Use</SectionLabel>
          <SectionTitle id="tools" onDark>
            Powered by Industry-Leading Tools
          </SectionTitle>
        </Reveal>

        <ul className={styles.tabs} role="tablist" aria-label="Tool categories">
          {toolTabs.map((tab, i) => (
            <li key={tab.label}>
              <button
                role="tab"
                aria-selected={i === active}
                className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                onClick={() => setActive(i)}
              >
                <span aria-hidden="true">{tab.icon}</span>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <ul className={styles.grid} role="tabpanel" aria-label={toolTabs[active].label}>
          {toolTabs[active].tools.map((tool, i) => (
            <li key={`${tool.name}-${i}`} className={styles.tool}>
              <Image
                src={tool.image}
                alt={tool.name}
                width={120}
                height={120}
                sizes="(max-width: 767px) 30vw, 12vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
