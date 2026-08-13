import Image from "next/image";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { FiClock, FiMonitor, FiSend } from "react-icons/fi";
import { TbCoin } from "react-icons/tb";
import { consultation } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./Consultation.module.css";

const metaIcons = { invest: TbCoin, clock: FiClock, screen: FiMonitor, send: FiSend };

export default function Consultation() {
  const { meta, note, analyze, receive, strategist } = consultation;

  return (
    <section className={styles.section} aria-labelledby="consultation">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <SectionLabel>Personalized Business Growth Consultation</SectionLabel>
          <SectionTitle id="consultation">
            Stop Guessing. Build a Marketing System That{" "}
            <span className={styles.accent}>Actually Grows</span> Your Business.
          </SectionTitle>
          <div>
            <p className={styles.lead}>
              Every business is different — that&apos;s why we don&apos;t offer generic advice.
              Before your consultation, our team studies your business, competitors, branding,
              advertising, customer journey, sales funnel, website and technology stack.
            </p>
            <p className={styles.pitch}>
              &ldquo;In <span className={styles.accent}>45 minutes,</span> you&apos;ll get a complete
              roadmap built only for you.&rdquo;
              <br />
              &ldquo;No templates. No generic suggestions.&rdquo;
            </p>
          </div>
        </Reveal>

        <div className={styles.columns}>
          <Reveal>
            <div className={styles.metaBar}>
              {meta.map((item) => {
                const Icon = metaIcons[item.icon];
                return (
                  <div key={item.label}>
                    <span className={styles.metaLabel}>
                      <Icon size={17} />
                      {item.label}
                    </span>
                    <span className={styles.metaValue}>
                      {item.value}
                      {item.suffix && (
                        <span
                          className={
                            item.suffix.length > 14 ? styles.metaSuffixStacked : styles.metaSuffix
                          }
                        >
                          {item.suffix}
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className={styles.note}>
              <span className={styles.noteIcon} aria-hidden="true">
                📋
              </span>
              <p className={styles.notepara}>{note}</p>
            </div>

            <div className={styles.actions}>
              <a href="#contact" className={styles.primary}>
                Book Your Strategy Session <FaArrowRight size={14} />
              </a>
              <a href="#receive" className={styles.secondary}>
                See What You&apos;ll Receive
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.strategist}>
              <h3 className={styles.strategistTitle}>MEET YOUR STRATEGIST</h3>

              <ul className={styles.badges}>
                {strategist.badges.map((badge) => (
                  <li key={badge.label} className={styles.badge}>
                    <span className={styles.badgeIcon} aria-hidden="true">
                      {badge.icon}
                    </span>
                    <span>
                      <span className={styles.badgeLabel}>{badge.label}</span>
                      <span className={styles.badgeValue}>{badge.value}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className={styles.portrait}>
                <Image
                  src={strategist.image}
                  alt={strategist.role}
                  width={342}
                  height={342}
                  sizes="210px"
                />
              </div>

              <p className={styles.role}>{strategist.role}</p>
              <p className={styles.tags}>{strategist.tags}</p>
              <p className={styles.blurb}>{strategist.blurb}</p>
              <p className={styles.tagline}>{strategist.tagline}</p>

              <dl className={styles.strategistStats}>
                {strategist.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <div className={styles.lists} id="receive">
          <Reveal>
            <h3 className={styles.listHead}>WHAT WE&apos;LL ANALYZE BEFORE THE MEETING</h3>
            <ul className={styles.analyzeGrid}>
              {analyze.map((item) => (
                <li key={item.label} className={styles.analyzeItem}>
                  <span className={styles.analyzeIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className={styles.listHead}>WHAT YOU&apos;LL RECEIVE</h3>
            <ul className={styles.receiveGrid}>
              {receive.map((item) => (
                <li key={item} className={styles.receiveItem}>
                  <FaCheckCircle className={styles.check} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
