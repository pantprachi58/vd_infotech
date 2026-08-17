"use client";

import {
  Palette,
  Megaphone,
  Bot,
  TrendingUp,
  Search,
  MessageSquareText,
  RefreshCw,
  Cog,
  BarChart3,
} from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";

import Reveal from "./ui/Reveal";
import styles from "./Ecosystem.module.css";

export default function GrowthEcosystem() {
  return (
    <section className={styles.section} aria-labelledby="growth-ecosystem">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Growth Ecosystem</SectionLabel>
          <SectionTitle id="growth-ecosystem" ruled>
            AI + Creative + Technology + Marketing{" "}
            <span className={styles.accent}>Under One Roof</span>
          </SectionTitle>
          <p className={styles.description}>
            Modern business growth needs more than just marketing. We combine
            AI, creativity, technology, and marketing into one connected
            ecosystem that helps businesses build, grow, automate, and scale.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.diagramWrapper}>
            <div className={styles.diagramBox}>
            {/* dashed outer ring */}
            <div className={styles.ring} aria-hidden="true" />

            {/* decorative dots along the ring — rotate together as one unit */}
            <div className={styles.dotsOrbit} aria-hidden="true">
              <span className={`${styles.orbitDot} ${styles.dot1}`} />
              <span className={`${styles.orbitDot} ${styles.dot2}`} />
              <span className={`${styles.orbitDot} ${styles.dot3}`} />
              <span className={`${styles.orbitDot} ${styles.dot4}`} />
              <span className={`${styles.orbitDot} ${styles.dot5}`} />
              <span className={`${styles.orbitDot} ${styles.dot6}`} />
              <span className={`${styles.orbitDot} ${styles.dot7}`} />
            </div>

            {/* Technology circle (back layer) */}
            <div className={`${styles.circle} ${styles.circleTechnology}`}>
              <div className={styles.circleInner}>
                <div className={`${styles.iconCircle} ${styles.iconTech}`}>
                  <Bot className={styles.icon} />
                </div>
                <h3 className={styles.circleTitle}>Technology</h3>
                <p className={styles.circleSubtitle}>
                  Build, Automate &amp; Scale
                </p>
                <ul className={styles.circleList}>
                  <li>Website Development</li>
                  <li>App Development</li>
                  <li>Business Automation</li>
                  <li>Software Solutions</li>
                </ul>
              </div>
            </div>

            {/* Creative circle */}
            <div className={`${styles.circle} ${styles.circleCreative}`}>
              <div className={styles.circleInner}>
                <div className={`${styles.iconCircle} ${styles.iconCreative}`}>
                  <Palette className={styles.icon} />
                </div>
                <h3 className={styles.circleTitle}>Creative</h3>
                <p className={styles.circleSubtitle}>
                  Build Trust &amp; Recognition
                </p>
                <ul className={styles.circleList}>
                  <li>Branding</li>
                  <li>Creative Design</li>
                  <li>Content Creation</li>
                  <li>Video Production</li>
                </ul>
              </div>
            </div>

            {/* Marketing circle */}
            <div className={`${styles.circle} ${styles.circleMarketing}`}>
              <div className={styles.circleInner}>
                <div className={`${styles.iconCircle} ${styles.iconMarketing}`}>
                  <Megaphone className={styles.icon} />
                </div>
                <h3 className={styles.circleTitle}>Marketing</h3>
                <p className={styles.circleSubtitle}>
                  Drive Visibility &amp; Leads
                </p>
                <ul className={styles.circleList}>
                  <li>SEO</li>
                  <li>Performance Marketing</li>
                  <li>Social Media Marketing</li>
                  <li>Lead Generation</li>
                </ul>
              </div>
            </div>

            {/* Center badge */}
            <div className={styles.centerCircle}>
              <TrendingUp className={styles.centerIcon} />
              <span>Business Growth</span>
            </div>

            {/* Orbiting pills */}
            <div className={`${styles.pill} ${styles.pillSeo}`}>
              <Search className={styles.pillIcon} />
              <span>AI-Powered SEO</span>
            </div>
            <div className={`${styles.pill} ${styles.pillContent}`}>
              <MessageSquareText className={styles.pillIcon} />
              <span>AI Content Assistance</span>
            </div>
            <div className={`${styles.pill} ${styles.pillAds}`}>
              <RefreshCw className={styles.pillIcon} />
              <span>AI-Enhanced Ad Optimization</span>
            </div>
            <div className={`${styles.pill} ${styles.pillAutomation}`}>
              <Cog className={styles.pillIcon} />
              <span>AI Automation Systems</span>
            </div>
            <div className={`${styles.pill} ${styles.pillAnalytics}`}>
              <BarChart3 className={styles.pillIcon} />
              <span>AI Analytics & Insights</span>
            </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <button className="btn" href="#contact">Build Your Growth System</button>
        </Reveal>
      </div>
    </section>
  );
}