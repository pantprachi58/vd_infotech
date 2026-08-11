"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/data/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  // lock scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} aria-label="VD Infotech home">
          <Image
            src="/images/vd-infotech-final-logo-red-and-black-01-1.webp"
            alt="VD Infotech"
            width={222}
            height={50}
            priority
          />
        </a>

        <div className={`${styles.rightGroup} ${styles.desktopOnly}`}>
          <nav aria-label="Primary">
            <ul className={styles.nav}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <a className={styles.navLink} href={item.href ?? "#"}>
                    {item.label}
                    {item.children && (
                      <FiChevronDown className={styles.chevron} size={14} />
                    )}
                  </a>
                  {item.children && (
                    <ul className={styles.dropdown}>
                      {item.children.map((child) => (
                        <li key={child}>
                          <a href="#">{child}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className={styles.cta}>
            Book an Appointment
          </a>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <FiMenu />
        </button>
      </div>

      {open && (
        <>
          <button
            className={styles.backdrop}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className={styles.drawer} role="dialog" aria-label="Menu">
            <div className={styles.drawerHead}>
              <Image
                src="/images/vd-infotech-final-logo-red-and-black-01-1.webp"
                alt="VD Infotech"
                width={160}
                height={36}
              />
              <button
                className={styles.burger}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            <ul className={styles.drawerNav}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    className={styles.navLink}
                    onClick={() =>
                      item.children
                        ? setExpanded(expanded === item.label ? null : item.label)
                        : setOpen(false)
                    }
                  >
                    {item.label}
                    {item.children && (
                      <FiChevronDown
                        className={styles.chevron}
                        size={16}
                        style={{
                          transform: expanded === item.label ? "rotate(180deg)" : "none",
                        }}
                      />
                    )}
                  </button>
                  {item.children && expanded === item.label && (
                    <ul className={styles.drawerSub}>
                      {item.children.map((child) => (
                        <li key={child}>
                          <a href="#" onClick={() => setOpen(false)}>
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <a href="#contact" className={`${styles.cta} ${styles.drawerCta}`}>
              Book an Appointment
            </a>
          </div>
        </>
      )}
    </header>
  );
}