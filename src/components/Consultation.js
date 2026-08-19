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
                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.961 33.931L64.3207 40.049C62.4048 47.1898 61.4485 50.7618 59.2793 53.0766C57.5677 54.9043 55.3527 56.1837 52.9143 56.7532C52.6082 56.8249 52.2968 56.8798 51.9802 56.9178C49.0827 57.2757 45.5455 56.3288 39.1108 54.6061C31.97 52.6903 28.398 51.734 26.0832 49.5648C24.2549 47.8523 22.9755 45.6362 22.4067 43.1966C21.6847 40.106 22.641 36.5371 24.5568 29.3963L26.194 23.2783L26.9667 20.4125C28.4075 15.1368 29.3765 12.233 31.2353 10.2475C32.9474 8.42094 35.1623 7.14269 37.6003 6.57414C40.691 5.85214 44.263 6.80848 51.407 8.72431C58.5447 10.637 62.1167 11.5933 64.4315 13.7593C66.2603 15.4726 67.5397 17.6899 68.108 20.1306C68.83 23.2213 67.8737 26.7901 65.961 33.931ZM34.9942 31.0493C35.075 30.748 35.2144 30.4655 35.4044 30.2181C35.5944 29.9707 35.8313 29.7631 36.1015 29.6073C36.3718 29.4514 36.6701 29.3503 36.9794 29.3098C37.2888 29.2692 37.603 29.29 37.9043 29.371L53.1993 33.4718C53.5086 33.5451 53.7999 33.6798 54.0562 33.8678C54.3124 34.0558 54.5284 34.2933 54.6911 34.5662C54.8539 34.8392 54.9603 35.142 55.0039 35.4568C55.0475 35.7716 55.0275 36.092 54.945 36.3989C54.8626 36.7059 54.7194 36.9931 54.5239 37.2437C54.3284 37.4942 54.0846 37.703 53.8069 37.8577C53.5293 38.0123 53.2234 38.1096 52.9074 38.1439C52.5915 38.1782 52.2718 38.1487 51.9675 38.0571L36.6725 33.9595C36.0647 33.7962 35.5465 33.3983 35.2318 32.8533C34.9171 32.3082 34.8316 31.6574 34.9942 31.0493ZM32.5368 40.2295C32.7001 39.6216 33.098 39.1035 33.643 38.7888C34.1881 38.4741 34.8358 38.3886 35.4438 38.5511L44.6208 41.0116C44.9315 41.0834 45.2246 41.2169 45.4826 41.4043C45.7406 41.5917 45.9582 41.8292 46.1225 42.1025C46.2867 42.3759 46.3942 42.6795 46.4386 42.9952C46.483 43.311 46.4633 43.6325 46.3808 43.9405C46.2983 44.2485 46.1545 44.5368 45.9582 44.7881C45.7619 45.0393 45.517 45.2485 45.2381 45.4031C44.9592 45.5577 44.652 45.6545 44.3348 45.6878C44.0177 45.7211 43.6971 45.6902 43.3922 45.597L34.2152 43.1396C33.9138 43.0588 33.6314 42.9194 33.384 42.7294C33.1365 42.5394 32.929 42.3025 32.7731 42.0323C32.6172 41.762 32.5162 41.4637 32.4756 41.1544C32.4351 40.845 32.4559 40.5308 32.5368 40.2295Z" fill="#DA0A03"/>
<path opacity="0.5" d="M51.981 56.9209C51.3186 58.9474 50.1553 60.774 48.599 62.2314C46.2842 64.4005 42.7122 65.3569 35.5713 67.2695C28.4305 69.1822 24.8585 70.1417 21.771 69.4197C19.3314 68.8508 17.1153 67.5714 15.4028 65.7432C13.2336 63.4284 12.2741 59.8563 10.3615 52.7155L8.72431 46.5975C6.80848 39.4567 5.85215 35.8847 6.57098 32.7972C7.1407 30.3572 8.42125 28.1411 10.2506 26.429C12.5655 24.2598 16.1375 23.3035 23.2783 21.3877C24.6252 21.0246 25.8549 20.6984 26.9675 20.4092L26.1948 23.2782L24.5576 29.3962C22.6418 36.537 21.6855 40.1058 22.4043 43.1965C22.974 45.6364 24.2546 47.8526 26.084 49.5647C28.3988 51.7339 31.9708 52.6902 39.1116 54.606C45.5463 56.3287 49.0835 57.2787 51.981 56.9209Z" fill="#DA0A03"/>
</svg>
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
                      {badge.icon && (
                        <Image
                          src={badge.icon}
                          alt=""
                          width={24}
                          height={24}
                          sizes="24px"
                        />
                      )}
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
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt=""
                        width={18}
                        height={18}
                        sizes="18px"
                      />
                    )}
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
