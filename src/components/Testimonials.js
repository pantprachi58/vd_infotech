"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaCircleUser } from "react-icons/fa6";
import { testimonials } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Client Success Stories</SectionLabel>
          <div>
            <h2 className={styles.title} id="testimonials">Experiences We&apos;ve Built Together</h2>
            <p as="p" ruled className={styles.title}>
              What <span className={styles.subtitle}>Our Clients Are Saying</span>
            </p>
          </div>
        </Reveal>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          loop
          speed={600}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 0: { slidesPerView: 1 }, 992: { slidesPerView: 2 } }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name} style={{ height: "auto" }}>
              <article className={styles.card}>
                <div className={styles.top}>
                  <FaCircleUser className={styles.avatar} aria-hidden="true" />
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.role}>{item.role}</p>
                    <div className={styles.stars} aria-label={`${item.rating} out of 5 stars`}>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={styles.body}>{item.body}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
