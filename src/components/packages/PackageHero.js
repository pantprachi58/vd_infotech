import Image from "next/image";
import { overview } from "@/lib/packages";
import Reveal from "../ui/Reveal";
import styles from "./PackageHero.module.css";

// Figma draws one icon per fact card; the JSON carries the fact, this maps it
// to the exported artwork.
const FACT_ICONS = {
  audience: "/svg/p1.svg",
  availability: "/svg/p2.svg",
  validity: "/svg/p3.svg",
  type: "/svg/p4.svg",
};

/** The design sets the word "Growth" in red inside the heading. */
function Heading({ text, accent = "Growth" }) {
  const [before, after] = text.split(accent);
  if (after === undefined) return <>{text}</>;

  return (
    <>
      {before}
      <span className={styles.redText}>{accent}</span>
      {after}
    </>
  );
}

export default function PackageHero() {
  const { eyebrow, title, description, card } = overview;

  return (
    <section className={styles.section}>
      <div className="container">
        {/* The eyebrow sits above the two-column split: in the design the card
            is level with the heading, not with the label. */}
        <Reveal>
          <div className={styles.label}>
            <span className={styles.labelBox}>{eyebrow.toUpperCase()}</span>
            <span className={styles.labelRule} aria-hidden="true" />
          </div>
        </Reveal>

        <div className={styles.inner}>
          <div className={styles.leftColumn}>
            <Reveal>
              <h1 className={styles.title}>
                <Heading text={title} />
              </h1>
              <p className={styles.description}>{description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/package.jpg"
                  alt="Business meeting"
                  width={761}
                  height={350}
                  priority
                  className={styles.image}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className={styles.rightColumn}>
            <div className={styles.packageCard}>
              <div className={styles.packageHeader}>{card.name}</div>

              <div className={styles.detailsGrid}>
                {card.facts.map((fact) => (
                  <div key={fact.label} className={styles.detailBox}>
                    <div className={styles.iconWrapper}>
                      <Image
                        src={FACT_ICONS[fact.icon] ?? "/svg/p1.svg"}
                        alt=""
                        width={42}
                        height={42}
                        className={styles.icon}
                      />
                    </div>
                    <h3 className={styles.detailLabel}>{fact.label}</h3>
                    <p className={styles.detailText}>{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
