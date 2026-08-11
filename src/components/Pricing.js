import { TbChartLine, TbWorld, TbSpeakerphone, TbDeviceLaptop, TbZoomScan } from "react-icons/tb";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { pricing } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./Pricing.module.css";

const icons = [TbChartLine, TbWorld, TbSpeakerphone, TbDeviceLaptop, TbZoomScan];

export default function Pricing() {
  return (
    <section className={styles.section} aria-labelledby="pricing">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Business Growth Packages</SectionLabel>
          <SectionTitle id="pricing">Our Cost Effect Service Pricing</SectionTitle>
          <p className={styles.intro}>
            Our goal is to make digital marketing accessible and affordable, empowering startups,
            SMBs, and enterprises to grow with confidence.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {pricing.map((plan, i) => {
            const Icon = icons[i] ?? TbChartLine;
            return (
              <Reveal key={plan.title} as="li" delay={i * 0.06}>
                <article className={styles.card}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className={styles.title}>{plan.title}</h3>
                  <p className={styles.from}>Starting from</p>
                  <p className={styles.price}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>{plan.usd}</span>
                    <span className={styles.per}>/mo</span>
                  </p>
                  <span className={styles.inr}>{plan.inr}</span>
                  <a href="#" className={styles.explore}>
                    <HiOutlineDesktopComputer size={17} />
                    Explore
                  </a>
                  <a href="#contact" className={styles.contact}>
                    Contact Us
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
