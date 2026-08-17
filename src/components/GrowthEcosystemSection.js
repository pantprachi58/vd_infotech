"use client";
import React, { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './GrowthEcosystemSection.module.css';

/* ── Data ─────────────────────────────────────────────── */
const circles = [
  {
    id: 'creative',
    label: 'Creative',
    sub: 'Build Trust & Recognition',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    items: ['Branding', 'Creative Design', 'Content Creation', 'Video Production'],
    cls: styles.circleCreative,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    sub: 'Drive Visibility & Leads',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    items: ['SEO', 'Performance Marketing', 'Social Media Marketing', 'Lead Generation'],
    cls: styles.circleMarketing,
  },
  {
    id: 'tech',
    label: 'Technology',
    sub: 'Build, Automate & Scale',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
      </svg>
    ),
    items: ['Website Development', 'App Development', 'Business Automation', 'Software Solutions'],
    cls: styles.circleTech,
  },
];

const cards = [
  {
    id: 'creative',
    label: 'Creative',
    sub: 'Build Trust & Recognition',
    icon: '',
    items: ['Branding', 'Creative Design', 'Content Creation', 'Video Production'],
    cls: styles.cardCreative,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    sub: 'Drive Visibility & Leads',
    icon: '',
    items: ['SEO', 'Performance Marketing', 'Social Media Marketing', 'Lead Generation'],
    cls: styles.cardMarketing,
  },
  {
    id: 'tech',
    label: 'Technology',
    sub: 'Build, Automate & Scale',
    icon: '',
    items: ['Website Development', 'App Development', 'Business Automation', 'Software Solutions'],
    cls: styles.cardTech,
  },
];

const leftBadges = [
  { 
    label: 'AI-Powered SEO', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ), 
    bg: 'rgba(168,85,247,0.1)', 
    color: '#a855f7' 
  },
  { 
    label: 'AI-Enhanced Ad Optimization', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      </svg>
    ), 
    bg: 'rgba(99,102,241,0.1)', 
    color: '#6366f1' 
  },
  { 
    label: 'AI Analytics & Insights', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    ), 
    bg: 'rgba(59,130,246,0.1)', 
    color: '#3b82f6' 
  },
];

const rightBadges = [
  { 
    label: 'AI Automation Systems', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/>
      </svg>
    ), 
    bg: 'rgba(20,184,166,0.1)', 
    color: '#14b8a6' 
  },
  { 
    label: 'AI Content Assistance', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ), 
    bg: 'rgba(16,185,129,0.1)', 
    color: '#10b981' 
  },
];

const aiPills = [
  { label: 'AI-Powered SEO', icon: '', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' },
  { label: 'AI-Enhanced Ad Optimization', icon: '', bg: 'rgba(99,102,241,0.12)', color: '#6366f1' },
  { label: 'AI Analytics & Insights', icon: '', bg: 'rgba(59,130,246,0.12)', color: '#3b82f6' },
  { label: 'AI Automation Systems', icon: '', bg: 'rgba(20,184,166,0.12)', color: '#14b8a6' },
  { label: 'AI Content Assistance', icon: '', bg: 'rgba(16,185,129,0.12)', color: '#10b981' },
];

/* ── Component ─────────────────────────────────────────── */
export default function GrowthEcosystem() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.wrapper}>

      {/* ── Video Background Section (Hero + Venn) ── */}
      <div className={styles.videoSection}>

        {/* Shared background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/assets/video/backgroundImage.mp4" type="video/mp4" />
        </video>

        {/* ── Hero ── */}
        <ScrollReveal animation="fade-up">
          <section className={styles.heroSection}>
            <div className={styles.content}>
              <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>
                  AI + Creative + Technology + Marketing
                  <span className={styles.headingAccent}>Under One Roof</span>
                </h2>
              </div>
              <p className={styles.subheading}>
                Modern business growth needs more than just marketing...
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={150}>
          <section className={styles.vennSection}>
          <div className={styles.vennGrid}>

            {/* Left badges */}
            <div className={styles.sideLeft}>
              {leftBadges.map((b) => (
                <div className={styles.sideBadge} key={b.label}>
                  <span
                    className={styles.badgeIcon}
                    style={{ background: b.bg, color: b.color }}
                  >
                    {b.icon}
                  </span>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Venn Diagram */}
            <div className={styles.vennDiagram}>
              
              {/* Animated orbit dots */}
              <div className={styles.orbitCircle}>
                <div className={styles.orbitDot}></div>
                <div className={styles.orbitDot}></div>
                <div className={styles.orbitDot}></div>
                <div className={styles.orbitDot}></div>
                <div className={styles.orbitDot}></div>
                <div className={styles.orbitDot}></div>
              </div>

              {circles.map((c) => (
                <div
                  key={c.id}
                  className={`${styles.circle} ${c.cls}`}
                >
                  <div className={styles.circleIcon}>{c.icon}</div>
                  <span className={styles.circleLabel}>{c.label}</span>
                  <span className={styles.circleSub}>{c.sub}</span>
                  <ul className={styles.bulletList}>
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Center Core */}
              <div className={styles.coreBadge}>
                <span className={styles.coreIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <span className={styles.coreTitle}>Business<br />Growth</span>
              </div>
            </div>

            {/* Right badges */}
            <div className={styles.sideRight}>
              {rightBadges.map((b) => (
                <div className={styles.sideBadge} key={b.label}>
                  <span
                    className={styles.badgeIcon}
                    style={{ background: b.bg, color: b.color }}
                  >
                    {b.icon}
                  </span>
                  {b.label}
                </div>
              ))}
            </div>

          </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={250}>
          <div className={styles.banner}>
            <span className={styles.bannerRocket}></span>
            <span className={styles.bannerText}>We are a Business Growth Ecosystem</span>
          </div>
        </ScrollReveal>

      </div>{/* end videoSection */}



    </div>
  );
}