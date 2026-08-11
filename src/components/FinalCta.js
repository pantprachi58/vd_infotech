"use client";

import { FaArrowRight } from "react-icons/fa6";
import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";
import btn from "./ui/ArrowButton.module.css";
import styles from "./FinalCta.module.css";

const fields = [
  { name: "name", placeholder: "Your Name", type: "text", required: true },
  { name: "email", placeholder: "Email Address", type: "email", required: true },
  { name: "phone", placeholder: "Phone Number", type: "tel", required: true },
  { name: "website", placeholder: "Website (Optional)", type: "url", required: false },
];

export default function FinalCta() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="final-cta">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Stay Ahead. Grow Smarter.</SectionLabel>
          <h2 id="final-cta" className={styles.title}>
            Your Business Has More <span className={styles.accent}>Potential</span> Than You Think
          </h2>
          <p className={styles.intro}>
            Your competitors are already building their digital presence. Don&apos;t get left behind.
            Not just websites. Not just ads. But a complete system that brings consistent growth to
            your business.
          </p>
        </Reveal>

        <Reveal>
          {/* Static export — wire this to your endpoint or form service. */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            {fields.map((field) => (
              <input
                key={field.name}
                className={styles.input}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                aria-label={field.placeholder}
              />
            ))}

            <button type="submit" className={`${btn.btn} ${btn.italic} ${styles.submit}`}>
              <span className={btn.circle} aria-hidden="true">
                <FaArrowRight />
              </span>
              Start My Growth Journey
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
