"use client";

import { useState } from "react";
import styles from "./seoPackage.modular.css";
import { PLANS, TOP_TABLE, SECTIONS } from "./data";

const BILLING_OPTIONS = ["Monthly", "Quarterly", "Bi-Annually", "Annually"];
const CURRENCIES = ["₹", "$", "£", "€", "¥"];
const BUSINESS_TABS = ["Startup Business", "Corporate Business", "Enterprises"];

function Cell({ value }) {
  if (value === "c") return <span className={styles.check}>✓</span>;
  if (value === "x") return <span className={styles.cross}>✕</span>;
  if (value === "startNow") return <span className={styles.startNow}>Start Now</span>;
  return <span>{value}</span>;
}

export default function SeoPackagesPage() {
  const [billing, setBilling] = useState("Monthly");
  const [currency, setCurrency] = useState("₹");
  const [businessTab, setBusinessTab] = useState("Startup Business");

  return (
    <div className={styles.page}>
      {/* Top info bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <span>info@vdinfotech.com</span>
          <span>+91 929-573-1999</span>
        </div>
        <div>🌐 EN</div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          VD <span>INFOTECH</span>
        </div>
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Services</li>
          <li>Product</li>
          <li>Packages</li>
          <li>Technologies</li>
          <li>AI Agency</li>
          <li>Company</li>
          <li>Market area</li>
        </ul>
        <button className={styles.bookBtn}>Book an Appointment</button>
      </nav>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroPattern} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>SEO Packages</h1>
        </div>
      </header>

      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introBox}>
          Are you having trouble getting your website noticed online? We can help you!
          With our SEO services, we can help you make your website stand out in search
          results, increase organic traffic and improve your overall visibility. Our SEO
          specific packages include everything you need, from keyword research to
          on-page optimization. We also handle monthly content creation, link building,
          and reporting. Our experts will design an action plan tailored to your
          company&apos;s goals.
        </div>
      </section>

      {/* Controls */}
      <section className={styles.controls}>
        <div className={styles.controlsRow}>
          <div className={styles.billingToggle}>
            {BILLING_OPTIONS.map((opt) => (
              <button
                key={opt}
                className={billing === opt ? styles.active : ""}
                onClick={() => setBilling(opt)}
                type="button"
              >
                {opt}
              </button>
            ))}
          </div>
          <div className={styles.currencyToggle}>
            {CURRENCIES.map((cur) => (
              <button
                key={cur}
                className={currency === cur ? styles.active : ""}
                onClick={() => setCurrency(cur)}
                type="button"
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.businessTabs}>
          {BUSINESS_TABS.map((tab) => (
            <button
              key={tab}
              className={businessTab === tab ? styles.active : ""}
              onClick={() => setBusinessTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Pricing table */}
      <section className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Activity</th>
              {PLANS.map((p) => (
                <th key={p}>{p}</th>
              ))}
              <th>Custom</th>
            </tr>
          </thead>
          <tbody>
            {/* Top summary table */}
            {TOP_TABLE.rows.map((row, i) => (
              <tr key={row.label}>
                <td className={styles.label}>{row.label}</td>
                {row.values.map((v, j) => (
                  <td key={j}>
                    <Cell value={v} />
                  </td>
                ))}
                {i === 0 && (
                  <td
                    rowSpan={TOP_TABLE.rows.length}
                    className={styles.customCell}
                  >
                    <span className={styles.asPerNeed}>As Per Need</span>
                  </td>
                )}
              </tr>
            ))}

            {/* Feature sections */}
            {SECTIONS.map((section) => (
              <SectionRows key={section.title} section={section} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

function SectionRows({ section }) {
  return (
    <>
      <tr className={styles.sectionHeaderRow}>
        <td colSpan={PLANS.length + 2}>{section.title}</td>
      </tr>
      {section.rows.map((row, i) => (
        <tr key={row.label}>
          <td className={styles.label}>{row.label}</td>
          {row.values.map((v, j) => (
            <td key={j} className={row.muted ? styles.muted : ""}>
              <Cell value={v} />
            </td>
          ))}
          {i === 0 && (
            <td rowSpan={section.rows.length} className={styles.customCell}>
              <span className={styles.asPerNeed}>As Per Need</span>
            </td>
          )}
        </tr>
      ))}
    </>
  );
}