"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { caseStudies } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./CaseStudies.module.css";

export default function CaseStudies() {
  return (
    <section className={styles.section} aria-labelledby="case-studies">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Case Studies</SectionLabel>
          <SectionTitle id="case-studies" ruled>
            Turning Goals Into Growth
          </SectionTitle>
          <p className={styles.intro}>
            As a growth-focused digital marketing company, we&apos;ve helped businesses strengthen
            their online presence, reach more customers, and achieve meaningful business growth
            through marketing, branding, and web development solutions.
          </p>
        </Reveal>

        <div className={styles.stage}>
          <button className={`${styles.nav} ${styles.prev}`} aria-label="Previous case study">
            <FiChevronLeft />
          </button>
          <button className={`${styles.nav} ${styles.next}`} aria-label="Next case study">
            <FiChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop
            speed={600}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            navigation={{ prevEl: `.${styles.prev}`, nextEl: `.${styles.next}` }}
          >
            {caseStudies.map((study) => (
              <SwiperSlide key={study.name}>
                <article className={styles.card}>
                  <div className={styles.media}>
                    <Image
                      src={study.image}
                      alt={study.name}
                      width={748}
                      height={468}
                      sizes="(max-width: 991px) 100vw, 45vw"
                    />
                  </div>
                  <div className={styles.body}>
                    <h3 className={styles.name}>{study.name}</h3>
                    <p className={styles.text}>{study.body}</p>
                    <ul className={styles.stats}>
                      {study.stats.map((stat) => (
                        <li key={stat} className={styles.stat}>
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
