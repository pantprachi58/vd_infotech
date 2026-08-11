import Image from "next/image";
import { FaWhatsapp, FaArrowRight, FaRegClock } from "react-icons/fa6";
import { experts, site } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./Experts.module.css";

export default function Experts() {
  return (
    <section className={styles.section} aria-labelledby="experts">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Connect With Us</SectionLabel>
          <SectionTitle id="experts">Talk to a Digital Growth Expert Today</SectionTitle>
          <p className={styles.intro}>
            Get personalized advice on SEO, Google Ads, Website Development, Branding, AI Solutions,
            and Performance Marketing.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {experts.map((expert, i) => (
            <Reveal key={expert.name} as="li" delay={i * 0.08}>
              <article className={styles.card}>
                <div className={styles.top}>
                  <div className={styles.avatar}>
                    <Image src={expert.image} alt={expert.name} width={137} height={137} />
                    <span className={styles.online} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className={styles.name}>{expert.name}</h3>
                    <p className={styles.role}>{expert.role}</p>
                    <span className={styles.years}>{expert.years}&nbsp; Years Experience</span>
                    <p className={styles.available}>Available Now</p>
                  </div>
                </div>

                <p className={styles.blurb}>{expert.blurb}</p>

                <a
                  className={styles.chat}
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.chatLeft}>
                    <FaWhatsapp className={styles.chatIcon} />
                    Chat on WhatsApp
                  </span>
                  <FaArrowRight />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className={styles.or}>OR</p>

          <div className={styles.banner}>
            <div>
              <h3 className={styles.bannerTitle}>
                Schedule a <span className={styles.bannerAccent}>FREE 5-10 minute</span> Consultation
              </h3>
              <p className={styles.bannerBody}>
                Discuss your business goals with our senior strategist and receive a tailored digital
                growth plan.
              </p>
            </div>
            <a href="#contact" className={styles.pick}>
              <FaRegClock size={22} />
              Pick a Time
              <FaArrowRight size={20} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
