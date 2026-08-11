import Image from "next/image";
import { TbRosetteDiscount } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbChartHistogram } from "react-icons/tb";
import { coreServices } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import ArrowButton from "./ui/ArrowButton";
import Reveal from "./ui/Reveal";
import styles from "./CoreServices.module.css";

const icons = {
  percent: TbRosetteDiscount,
  code: FaCode,
  megaphone: HiOutlineSpeakerphone,
  chart: TbChartHistogram,
};

export default function CoreServices() {
  return (
    <section className={styles.section} aria-labelledby="core-services">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Core Services</SectionLabel>
          <SectionTitle id="core-services" ruled>
            Everything You Need to Grow Online
          </SectionTitle>
        </Reveal>

        <div className={styles.grid}>
          {coreServices.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <a href="#" className={styles.card}>
                  <Image
                    src={service.image}
                    alt=""
                    width={358}
                    height={618}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw"
                  />
                  <span className={styles.scrim} aria-hidden="true" />

                  <div className={styles.cardBody}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{service.title}</h3>

                    <div className={styles.detail}>
                      <div className={styles.detailInner}>
                        <p className={styles.body}>{service.body}</p>
                        <ul className={styles.tags}>
                          {service.tags.map((tag) => (
                            <li key={tag} className={styles.tag}>
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <ArrowButton href="#contact">Discuss Your Project</ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
