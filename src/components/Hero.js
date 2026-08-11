"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import {
  TbDeviceDesktopAnalytics,
  TbSpeakerphone,
  TbBulb,
  TbZoomScan,
  TbUsersGroup,
  TbTrendingUp,
  TbTargetArrow,
  TbFocus2,
  TbSend,
  TbExternalLink,
} from "react-icons/tb";
import { heroSlides, site } from "@/data/site";
import styles from "./Hero.module.css";

const icons = {
  desktop: TbDeviceDesktopAnalytics,
  speaker: TbSpeakerphone,
  bulb: TbBulb,
  seo: TbZoomScan,
  leads: TbUsersGroup,
  trend: TbTrendingUp,
  target: TbTargetArrow,
  precision: TbFocus2,
  send: TbSend,
  doc: HiOutlineDocumentText,
  launch: TbExternalLink,
};

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={700}
      >
        {heroSlides.map((slide) => {
          const CtaIcon = icons[slide.cta.icon];
          return (
            <SwiperSlide key={slide.id}>
              {/* each slide carries its own artwork */}
              <div
                className={styles.canvas}
                style={{ backgroundImage: `url("${slide.image}")` }}
              >
                <div className="container">
                  <div className={styles.slide}>
                    <div className={styles.copy}>
                      <p className={styles.eyebrow}>{slide.eyebrow}</p>

                      <h1 className={styles.title}>
                        {slide.titleLines.map((line, li) => (
                          <span key={li} className={styles.line}>
                            {line.map(([text, accent], si) => (
                              <span key={si} className={accent ? styles.accent : undefined}>
                                {text}
                              </span>
                            ))}
                          </span>
                        ))}
                      </h1>

                      <p className={styles.body}>{slide.body}</p>

                      <ul className={styles.pills}>
                        {slide.pills.map((pill) => {
                          const Icon = icons[pill.icon];
                          return (
                            <li key={pill.label} className={styles.pill}>
                              <Icon size={26} />
                              {pill.label}
                            </li>
                          );
                        })}
                      </ul>

                      <div className={styles.actions}>
                        <a href="#contact" className={styles.quote}>
                          <CtaIcon size={22} />
                          {slide.cta.label}
                        </a>
                        <a
                          href={`https://wa.me/${site.whatsapp}`}
                          className={styles.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaWhatsapp size={22} />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
